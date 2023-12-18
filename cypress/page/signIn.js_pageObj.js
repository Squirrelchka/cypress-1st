export class ResetPassword {
      elements = {
      currentPasswordField: () => cy.get("#currentPassword"),
      newPasswordField: () => cy.get("#newPassword"),
      confirmPasswordField: () => cy.get("#confirmPassword"),
      buttonField: () => cy.get("#password-form > button"),
      };

inputPassword(currentPassword, newPassword, confNewPassword) {
this.elements.currentPasswordField().type(currentPassword);
this.elements.newPasswordField().type(newPassword);
this.elements.confirmPasswordField().type(confNewPassword);
this.elements.buttonField().click();
}
}