describe('Home Capital App', () => {
    beforeEach(() => {
        cy.visit('https://staging.homecapital.com.co/')
    })
    it('frontpage can be open', () => {
        cy.contains('OUTLET')
    })
    it('search estates', () => {
        cy.get('[id="sell-case-search--estate--search-btn"]').click()
        cy.contains('Precio del mercado')
    })
})
