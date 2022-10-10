describe('Home Capital App - Sale', () => {
    it('frontpage can be open', () => {
        cy.visit('https://staging.homecapital.com.co/')
        cy.contains('OUTLET')
    })
    it('page to purchase case form can be open', () => {
        cy.get('[id="the-header--purchase-cases-link-desktop"]').click()
        cy.contains('efectivo')
    })
    it('start property sale form step 1', () => {
        cy.get('[id="purchase-case-start-request-offer-survey--city"]').click()
        cy.contains('Bello').click()
        cy.get('[id="purchase-case-start-request-offer-survey--address-road-type"]').click()
        cy.contains('Carrera').click()
        cy.get('[id="purchase-case-start-request-offer-survey--address-road-number"]').type('59b')
        cy.get('[id="purchase-case-start-request-offer-survey--address-generator-road"]').type('58')
        cy.get('[id="purchase-case-start-request-offer-survey--address-generator-road-number"]').type('51')
        cy.get('[id="purchase-case-start-request-offer-survey--next"]').click()

    })
    it('start property sale form step 2', () => {
        cy.contains('Cra. 59b #51-58, Bello, Antioquia, Colombia')
        cy.get('[id="request-offer-survey-location--next"]').click()
    })
    it('start property sale form step 3', () => {
        cy.get('[id="request-offer-survey-personal-information--name-group-1"]').type('Luis')
        cy.get('[id="request-offer-survey-personal-information--last-name-group-1"]').type('Santa')
        cy.get('[id="request-offer-survey-personal-information--email-group-1"]').type('hola@mundo.co')
    })
})
