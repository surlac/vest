package dataset

import (
	"context"
	"sync"
	"time"
	"vest.com/vest/go/internal/errutil"
)

type CachingServicer interface {
	Get(context.Context, Code) (Chart, error)
}

type CachingService struct {
	servicer Servicer
	c        Chart
	mu       sync.Mutex
	t        time.Time
}

func NewCachingService(s Servicer) *CachingService {
	return &CachingService{s, Chart{}, sync.Mutex{}, time.Time{}}
}

func (s *CachingService) Get(ctx context.Context, code Code) (Chart, error) {
	s.mu.Lock()
	defer s.mu.Unlock()

	if time.Since(s.t) < 3*time.Hour {
		return s.c, nil
	}

	c, err := s.servicer.Get(ctx, code)
	if err != nil {
		return Chart{}, errutil.Wrap(err)
	}

	s.c = c
	s.t = time.Now()
	return c, nil
}
