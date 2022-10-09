describe('Home Capital App - Estates', () => {
    it('frontpage can be open', () => {
        cy.visit('https://staging.homecapital.com.co/')
        cy.contains('OUTLET')
    })
    it('search estates', () => {
        cy.get('[id="sell-case-search--estate--search-btn"]').click()
        cy.contains('Precio del mercado')
    })
})
