describe('Home Capital App - Sale', () => {
    it('frontpage can be open', () => {
        cy.visit('https://staging.homecapital.com.co/')
        cy.contains('OUTLET')
    })
    it('page to purchase case form can be open', () => {
        cy.get('[id="the-header--purchase-cases-link-desktop"]').click()
        cy.contains('efectivo')
    })
    it('start property sale form', () => {
        cy.get('[id="purchase-case-start-request-offer-survey--city"]').click()
    })
})
