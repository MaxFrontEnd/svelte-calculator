
describe('Test calculator', () => {
  beforeEach(() => {
    cy.visit("/").wait(150)
  })
  it('shows a correct label', () => {
    cy.get('[data-test="home-label"]').contains(/Calculator/i)
  })
  it('works correct with operations', () => {
    // + 
    cy.pressFive()
    cy.getResultField().contains('5');
    cy.get('[data-test="operator-+"]').click();
    cy.pressFive()
    cy.pressEqual()
    cy.getResultField().contains('10.00')

    //clear results
    cy.pressClear()
    // -
    cy.pressFive()
    cy.getResultField().contains('5');
    cy.get('[data-test="operator--"]').click();
    cy.pressFive()
    cy.pressEqual()
    cy.getResultField().contains('0.00')

    //clear results
    cy.pressClear()
    // *
    cy.pressFive()
    cy.getResultField().contains('5');
    cy.get('[data-test="operator-*"]').click();
    cy.pressFive()
    cy.pressEqual()
    cy.getResultField().contains('25.00')

    //clear results
    cy.pressClear()


    // /
 cy.pressFive()
    cy.getResultField().contains('5');
    cy.get('[data-test="operator-/"]').click();
    cy.pressFive()
    cy.pressEqual()
    cy.getResultField().contains('1.00')
    
  }) 
})