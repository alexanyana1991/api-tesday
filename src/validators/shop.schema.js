const yup = require('yup');

const shopSchema = yup.object({
  body: yup.object({
    ownerId: yup.number().required(),
    name: yup.string().required(),
    url: yup.string(),
    email: yup.string().email().trim().lowercase().required(),
    orderPhone: yup.string(),
    phone: yup.string(),
    importUrl: yup.string(),
    status: yup.string().required(),
    deactivationReason: yup.string(),
    termsAccepted: yup.boolean().required(),
    questionnaireRecipient: yup.string(),
    questionnaireSender: yup.string(),
    certifiedAgreementDate: yup.string(),
    customerId: yup.string(),
    createdAt: yup.string(),
    updateAt: yup.string(),
  }),
});

module.exports = shopSchema;
