export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '602e3b6fa90c39c52f0faea9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zr21uen4',
                  apiId: 'c289b98c-06ef-4c2d-8ab2-1f43f10258b8'
                },
                {
                  buildHookId: '602e3b6fb2a306c82f389dbe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-sb699kxo',
                  apiId: '0d36544c-5172-4e33-80b0-d4b98639b09d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomasBankauskas/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-sb699kxo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
