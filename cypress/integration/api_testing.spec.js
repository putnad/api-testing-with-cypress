describe('Automation API Testing', () => {

    it('Validate Response 200 on get List users', () => {
        cy.request({
            method: 'GET',
            url: '/api/users?page=2'
          })
            .should((response) => {
            expect(response.status).to.eq(200)
        })  
    })

    it('Validate email = michael.lawson@reqres.in on Get User ID 7', () => {
        cy.request({
            method: 'GET',
            url: '/api/users/7'
          })
            .should((response) => {
                expect(response.body.data.email).to.eq('michael.lawson@reqres.in')
        })  
    })

    it('Validate Create user using your name and your job', () => {
        cy.request({
            method: 'POST',
            url: '/api/users',
            body: {
                name: "Putri Nadiyah",
                job: "Quality Assurance",
            }
          })
          .should((response) => {
            expect(response.status).eq(201)
            expect(response.body.id).to.not.be.null
            expect(response.body.createdAt).to.not.be.null
          });
    })
    
})