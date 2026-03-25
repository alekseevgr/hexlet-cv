import { http, delay } from 'msw'
import { inertiaJson } from '@mocks/inertia'
import { menu, activityCards } from '@mocks/account/index'

export const autoApplyHandlers = [
  http.get('/account/autoapply', async ({ request }) => {
    console.log('MSW: handler hit', request.url)

    await delay()

    return inertiaJson({
      component: 'Account/AutoApply/Index',
      props: {
        menu,
        activityCards,
        autoApply: {
          enabled: true,
          keyWords: ['аналитик данных', 'sql', 'bi'],
          locations: ['Remote', 'Berlin', 'Москва'],
          frequency: 'everyDay',
        },
      },
      url: '/account/autoapply',
    })
  }),
]
