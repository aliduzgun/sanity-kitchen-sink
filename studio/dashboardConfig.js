export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '606d52d45f00608468e7ce9a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4j6phzp7',
                  apiId: '646d8830-16f1-4271-ae12-db3f6ee8e8ea'
                },
                {
                  buildHookId: '606d52d478a5df8a3c0bb2c8',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3pva1xqu',
                  apiId: 'f5631d78-29ed-4b26-aaa8-d6a99e0fdfcb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aliduzgun/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3pva1xqu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
