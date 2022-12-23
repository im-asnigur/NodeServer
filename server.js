const express = require('express');
const http = require('http');
const axios = require('axios');
const dataWithCQ = {"company":{"companyId":"500040d2-fed4-498e-b9cc-64c1d6d5ef0c","name":"ZeroMortgage","approved":true,"gtmId":null,"nmlsId":"7872","phoneNumber":"+11234567890","webSite":"www.google.com","emailAddress":"test@email.com","city":"ROSEMONT","state":"IL","zip":"60018","address":"9525 W BRYN MAWR AVE, SUITE 400","consentLink":null,"termsLink":null,"title":"ZeroMortgage | Low Rates Zero Fees* Zero Hassles"},"applyFormUiSetting":{"applyFormUiSettingId":"200465db-3b1f-475d-818b-bff8eb28f3a2","companyId":"500040d2-fed4-498e-b9cc-64c1d6d5ef0c","settings":"{\"colors\":{\"primary\":{\"main\":\"#F54A90\",\"accent\":\"#FFF6FB\"},\"secondary\":{\"background\":\"#FFF6FB\",\"accent\":\"#F54A90\"}},\"logoUrl\":\"https://ifskynetstagestorage.blob.core.windows.net/public/500040d2-fed4-498e-b9cc-64c1d6d5ef0c/94d74082-3361-4ac5-ba32-399bb77d50e7\"}"},"stepFlows":{"refinanceSteps":[{"key":"TypeOfLoan","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyType","title":"What kind of property are you interested in?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyUsageDetails","title":"Will this be a...","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAddress","title":"Property Address","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyValue","title":"Property Value","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentMortgageBalance","title":"How much do you owe on your current mortgage?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurposeOfRefinance","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentCreditProfile","title":"Please give us an idea of your credit score","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"AdditionalQuestions","title":"Additional questions.","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"assignmentQ4","title":"Additional questions.","customQuestionId":"2ac071aa-471d-44ac-971b-08dad9f71e1a","questionText":"assignment 4","answerType":"Bool","condition":null,"subSteps":null},{"key":"q3","title":"Additional questions.","customQuestionId":"c963067e-7549-4c62-5848-08dada0a0132","questionText":"q33","answerType":"Integer","condition":null,"subSteps":null},{"key":"CQ002","title":"Additional questions.","customQuestionId":"c8ff6be9-273f-45b3-971a-08dad9f71e1a","questionText":"CQ 00245","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ3","title":"Additional questions.","customQuestionId":"0191cc1d-9b00-4ca9-5847-08dada0a0132","questionText":"assignment Q3","answerType":"Text","condition":null,"subSteps":null},{"key":"assignmentQ2","title":"Additional questions.","customQuestionId":"577a5d48-3715-4cfa-9719-08dad9f71e1a","questionText":"assignment Q2","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ1","title":"Additional questions.","customQuestionId":"2ce80aca-9626-4c34-530e-08dada09e879","questionText":"assignment Q1","answerType":"Integer","condition":null,"subSteps":null},{"key":"asdasd","title":"Additional questions.","customQuestionId":"07cb2d7c-27c8-4346-cb8a-08dacef6a3fd","questionText":"tasd","answerType":"Text","condition":null,"subSteps":null},{"key":"test5","title":"Additional questions.","customQuestionId":"7472d4bf-0b52-4888-4d10-08dace251f9e","questionText":"test question 5","answerType":"Text","condition":null,"subSteps":null},{"key":"test","title":"Additional questions.","customQuestionId":"942fa778-a110-489a-46f2-08dace155a1f","questionText":"Add new question","answerType":"Text","condition":null,"subSteps":null},{"key":"newcustomquestion1","title":"Additional questions.","customQuestionId":"7298e0a9-7f4b-4e1a-46f1-08dace155a1f","questionText":"new custom question 12","answerType":"Integer","condition":null,"subSteps":null},{"key":"superlongquestion","title":"Additional questions.","customQuestionId":"0c160e12-12dd-42ee-f614-08dacc9b479f","questionText":"Super super super long question name for testing purposes with","answerType":"Double","condition":null,"subSteps":null},{"key":"222","title":"Additional questions.","customQuestionId":"35d0063b-24c3-414f-ef07-08dacc8a22a7","questionText":"my new 123","answerType":"Integer","condition":null,"subSteps":null},{"key":"toptop","title":"Additional questions.","customQuestionId":"ad15fa06-4df8-461f-1e5f-08dacc84f270","questionText":"brand new custom question","answerType":"Double","condition":null,"subSteps":null},{"key":"topquest","title":"Additional questions.","customQuestionId":"bd5bfeaf-9fa2-46a2-4b21-08dacc813294","questionText":"question at the top","answerType":"Integer","condition":null,"subSteps":null},{"key":"wrqwr","title":"Additional questions.","customQuestionId":"643662ca-4ea8-4ae0-75a2-08dacc80e9ed","questionText":"new test qeustion","answerType":"Integer","condition":null,"subSteps":null},{"key":"customquestket111","title":"Additional questions.","customQuestionId":"98b56bd5-686e-454e-4e7b-08dacc78d0c0","questionText":"custom question test 111","answerType":"Integer","condition":null,"subSteps":null},{"key":"custquest6","title":"Additional questions.","customQuestionId":"fbb8ebf7-e3e8-4294-9069-08dacc6040e7","questionText":"custom question #2","answerType":"Integer","condition":null,"subSteps":null}]},{"key":"PersonalInfo","title":"Enter the information below to see your rates","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RateComparison","title":"Rate Comparison & Highlights","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FullPersonalInfo","title":"Personal Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CreditProfile","title":"Credit Profile","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyInformation","title":"Property Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"TitleHolder","title":"Title Holder","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"ResidenceInfo","title":"Residence Info","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Reo","title":"Additional Real Estate Owned","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Income","title":"Income","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Assets","title":"Assets","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Declarations","title":"Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"DeclarationsGeneral","title":"General","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAndLoan","title":"Property and Loan Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"YourFinances","title":"Declarations about your finances","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"MilitaryServices","title":"Military Services","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DemographicInformation","title":"Demographic Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}]},{"key":"QuickReview","title":"Review","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FinalRateComparison","title":"Compare Terms","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}],"cashOutRefinanceSteps":[{"key":"TypeOfLoan","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyType","title":"What kind of property are you interested in?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyUsageDetails","title":"Will this be a...","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAddress","title":"Property Address","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyValue","title":"Property Value","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentMortgageBalance","title":"How much do you owe on your current mortgage?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurposeOfRefinance","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CashOutAmount","title":"Cash Out Amount","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentCreditProfile","title":"Please give us an idea of your credit score","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"AdditionalQuestions","title":"Additional questions.","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"assignmentQ4","title":"Additional questions.","customQuestionId":"2ac071aa-471d-44ac-971b-08dad9f71e1a","questionText":"assignment 4","answerType":"Bool","condition":null,"subSteps":null},{"key":"q3","title":"Additional questions.","customQuestionId":"c963067e-7549-4c62-5848-08dada0a0132","questionText":"q33","answerType":"Integer","condition":null,"subSteps":null},{"key":"CQ002","title":"Additional questions.","customQuestionId":"c8ff6be9-273f-45b3-971a-08dad9f71e1a","questionText":"CQ 00245","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ3","title":"Additional questions.","customQuestionId":"0191cc1d-9b00-4ca9-5847-08dada0a0132","questionText":"assignment Q3","answerType":"Text","condition":null,"subSteps":null},{"key":"assignmentQ2","title":"Additional questions.","customQuestionId":"577a5d48-3715-4cfa-9719-08dad9f71e1a","questionText":"assignment Q2","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ1","title":"Additional questions.","customQuestionId":"2ce80aca-9626-4c34-530e-08dada09e879","questionText":"assignment Q1","answerType":"Integer","condition":null,"subSteps":null},{"key":"asdasd","title":"Additional questions.","customQuestionId":"07cb2d7c-27c8-4346-cb8a-08dacef6a3fd","questionText":"tasd","answerType":"Text","condition":null,"subSteps":null},{"key":"test5","title":"Additional questions.","customQuestionId":"7472d4bf-0b52-4888-4d10-08dace251f9e","questionText":"test question 5","answerType":"Text","condition":null,"subSteps":null},{"key":"test","title":"Additional questions.","customQuestionId":"942fa778-a110-489a-46f2-08dace155a1f","questionText":"Add new question","answerType":"Text","condition":null,"subSteps":null},{"key":"newcustomquestion1","title":"Additional questions.","customQuestionId":"7298e0a9-7f4b-4e1a-46f1-08dace155a1f","questionText":"new custom question 12","answerType":"Integer","condition":null,"subSteps":null},{"key":"superlongquestion","title":"Additional questions.","customQuestionId":"0c160e12-12dd-42ee-f614-08dacc9b479f","questionText":"Super super super long question name for testing purposes with","answerType":"Double","condition":null,"subSteps":null},{"key":"222","title":"Additional questions.","customQuestionId":"35d0063b-24c3-414f-ef07-08dacc8a22a7","questionText":"my new 123","answerType":"Integer","condition":null,"subSteps":null},{"key":"toptop","title":"Additional questions.","customQuestionId":"ad15fa06-4df8-461f-1e5f-08dacc84f270","questionText":"brand new custom question","answerType":"Double","condition":null,"subSteps":null},{"key":"topquest","title":"Additional questions.","customQuestionId":"bd5bfeaf-9fa2-46a2-4b21-08dacc813294","questionText":"question at the top","answerType":"Integer","condition":null,"subSteps":null},{"key":"wrqwr","title":"Additional questions.","customQuestionId":"643662ca-4ea8-4ae0-75a2-08dacc80e9ed","questionText":"new test qeustion","answerType":"Integer","condition":null,"subSteps":null},{"key":"customquestket111","title":"Additional questions.","customQuestionId":"98b56bd5-686e-454e-4e7b-08dacc78d0c0","questionText":"custom question test 111","answerType":"Integer","condition":null,"subSteps":null},{"key":"custquest6","title":"Additional questions.","customQuestionId":"fbb8ebf7-e3e8-4294-9069-08dacc6040e7","questionText":"custom question #2","answerType":"Integer","condition":null,"subSteps":null}]},{"key":"PersonalInfo","title":"Enter the information below to see your rates","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RateComparison","title":"Rate Comparison & Highlights","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FullPersonalInfo","title":"Personal Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CreditProfile","title":"Credit Profile","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyInformation","title":"Property Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"TitleHolder","title":"Title Holder","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"ResidenceInfo","title":"Residence Info","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Reo","title":"Additional Real Estate Owned","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Income","title":"Income","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Assets","title":"Assets","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Declarations","title":"Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"DeclarationsGeneral","title":"General","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAndLoan","title":"Property and Loan Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"YourFinances","title":"Declarations about your finances","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"MilitaryServices","title":"Military Services","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DemographicInformation","title":"Demographic Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}]},{"key":"QuickReview","title":"Review","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FinalRateComparison","title":"Compare Terms","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}],"signedPurchasedContractSteps":[{"key":"TypeOfLoan","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FirstTimeHomeBuyer","title":"Are you a first time home buyer?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurchaseProcessType","title":"Where are you in the process currently?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyType","title":"What kind of property are you interested in?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyUsageDetails","title":"Will this be a...","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAddress","title":"Property Address","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurchasePrice","title":"Purchase Price","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentCreditProfile","title":"Please give us an idea of your credit score","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DownPayment","title":"Down Payment","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"WorkingWithRealtor","title":"Are you working with a realtor?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RealtorInLoop","title":"Do you want to keep your realtor in the loop?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RealtorInfo","title":"Great! Let's add their info to keep them up to date","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"AdditionalQuestions","title":"Additional questions.","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"assignmentQ4","title":"Additional questions.","customQuestionId":"2ac071aa-471d-44ac-971b-08dad9f71e1a","questionText":"assignment 4","answerType":"Bool","condition":null,"subSteps":null},{"key":"q3","title":"Additional questions.","customQuestionId":"c963067e-7549-4c62-5848-08dada0a0132","questionText":"q33","answerType":"Integer","condition":null,"subSteps":null},{"key":"CQ002","title":"Additional questions.","customQuestionId":"c8ff6be9-273f-45b3-971a-08dad9f71e1a","questionText":"CQ 00245","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ3","title":"Additional questions.","customQuestionId":"0191cc1d-9b00-4ca9-5847-08dada0a0132","questionText":"assignment Q3","answerType":"Text","condition":null,"subSteps":null},{"key":"assignmentQ2","title":"Additional questions.","customQuestionId":"577a5d48-3715-4cfa-9719-08dad9f71e1a","questionText":"assignment Q2","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ1","title":"Additional questions.","customQuestionId":"2ce80aca-9626-4c34-530e-08dada09e879","questionText":"assignment Q1","answerType":"Integer","condition":null,"subSteps":null},{"key":"asdasd","title":"Additional questions.","customQuestionId":"07cb2d7c-27c8-4346-cb8a-08dacef6a3fd","questionText":"tasd","answerType":"Text","condition":null,"subSteps":null},{"key":"test5","title":"Additional questions.","customQuestionId":"7472d4bf-0b52-4888-4d10-08dace251f9e","questionText":"test question 5","answerType":"Text","condition":null,"subSteps":null},{"key":"test","title":"Additional questions.","customQuestionId":"942fa778-a110-489a-46f2-08dace155a1f","questionText":"Add new question","answerType":"Text","condition":null,"subSteps":null},{"key":"newcustomquestion1","title":"Additional questions.","customQuestionId":"7298e0a9-7f4b-4e1a-46f1-08dace155a1f","questionText":"new custom question 12","answerType":"Integer","condition":null,"subSteps":null},{"key":"superlongquestion","title":"Additional questions.","customQuestionId":"0c160e12-12dd-42ee-f614-08dacc9b479f","questionText":"Super super super long question name for testing purposes with","answerType":"Double","condition":null,"subSteps":null},{"key":"222","title":"Additional questions.","customQuestionId":"35d0063b-24c3-414f-ef07-08dacc8a22a7","questionText":"my new 123","answerType":"Integer","condition":null,"subSteps":null},{"key":"toptop","title":"Additional questions.","customQuestionId":"ad15fa06-4df8-461f-1e5f-08dacc84f270","questionText":"brand new custom question","answerType":"Double","condition":null,"subSteps":null},{"key":"topquest","title":"Additional questions.","customQuestionId":"bd5bfeaf-9fa2-46a2-4b21-08dacc813294","questionText":"question at the top","answerType":"Integer","condition":null,"subSteps":null},{"key":"wrqwr","title":"Additional questions.","customQuestionId":"643662ca-4ea8-4ae0-75a2-08dacc80e9ed","questionText":"new test qeustion","answerType":"Integer","condition":null,"subSteps":null},{"key":"customquestket111","title":"Additional questions.","customQuestionId":"98b56bd5-686e-454e-4e7b-08dacc78d0c0","questionText":"custom question test 111","answerType":"Integer","condition":null,"subSteps":null},{"key":"custquest6","title":"Additional questions.","customQuestionId":"fbb8ebf7-e3e8-4294-9069-08dacc6040e7","questionText":"custom question #2","answerType":"Integer","condition":null,"subSteps":null}]},{"key":"PersonalInfo","title":"Enter the information below to see your rates","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RateComparison","title":"Rate Comparison & Highlights","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FullPersonalInfo","title":"Personal Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CreditProfile","title":"Credit Profile","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyInformation","title":"Property Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"TitleHolder","title":"Title Holder","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"ResidenceInfo","title":"Residence Info","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Reo","title":"Additional Real Estate Owned","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Income","title":"Income","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DownPaymentSource","title":"Down Payment Source","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Assets","title":"Assets","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Declarations","title":"Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"DeclarationsGeneral","title":"General","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAndLoan","title":"Property and Loan Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"YourFinances","title":"Declarations about your finances","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"MilitaryServices","title":"Military Services","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DemographicInformation","title":"Demographic Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}]},{"key":"QuickReview","title":"Review","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FinalRateComparison","title":"Compare Terms","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}],"searchingOrShoppingAroundSteps":[{"key":"TypeOfLoan","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FirstTimeHomeBuyer","title":"Are you a first time home buyer?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurchaseProcessType","title":"Where are you in the process currently?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyType","title":"What kind of property are you interested in?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyUsageDetails","title":"Will this be a...","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurchaseLocation","title":"Property Address","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Budget","title":"What kind of budget are we working with?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentCreditProfile","title":"Please give us an idea of your credit score","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DownPayment","title":"Down Payment","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"WorkingWithRealtor","title":"Are you working with a realtor?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RealtorInLoop","title":"Do you want to keep your realtor in the loop?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RealtorInfo","title":"Great! Let's add their info to keep them up to date","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"AdditionalQuestions","title":"Additional questions.","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"assignmentQ4","title":"Additional questions.","customQuestionId":"2ac071aa-471d-44ac-971b-08dad9f71e1a","questionText":"assignment 4","answerType":"Bool","condition":null,"subSteps":null},{"key":"q3","title":"Additional questions.","customQuestionId":"c963067e-7549-4c62-5848-08dada0a0132","questionText":"q33","answerType":"Integer","condition":null,"subSteps":null},{"key":"CQ002","title":"Additional questions.","customQuestionId":"c8ff6be9-273f-45b3-971a-08dad9f71e1a","questionText":"CQ 00245","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ3","title":"Additional questions.","customQuestionId":"0191cc1d-9b00-4ca9-5847-08dada0a0132","questionText":"assignment Q3","answerType":"Text","condition":null,"subSteps":null},{"key":"assignmentQ2","title":"Additional questions.","customQuestionId":"577a5d48-3715-4cfa-9719-08dad9f71e1a","questionText":"assignment Q2","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ1","title":"Additional questions.","customQuestionId":"2ce80aca-9626-4c34-530e-08dada09e879","questionText":"assignment Q1","answerType":"Integer","condition":null,"subSteps":null},{"key":"asdasd","title":"Additional questions.","customQuestionId":"07cb2d7c-27c8-4346-cb8a-08dacef6a3fd","questionText":"tasd","answerType":"Text","condition":null,"subSteps":null},{"key":"test5","title":"Additional questions.","customQuestionId":"7472d4bf-0b52-4888-4d10-08dace251f9e","questionText":"test question 5","answerType":"Text","condition":null,"subSteps":null},{"key":"test","title":"Additional questions.","customQuestionId":"942fa778-a110-489a-46f2-08dace155a1f","questionText":"Add new question","answerType":"Text","condition":null,"subSteps":null},{"key":"newcustomquestion1","title":"Additional questions.","customQuestionId":"7298e0a9-7f4b-4e1a-46f1-08dace155a1f","questionText":"new custom question 12","answerType":"Integer","condition":null,"subSteps":null},{"key":"superlongquestion","title":"Additional questions.","customQuestionId":"0c160e12-12dd-42ee-f614-08dacc9b479f","questionText":"Super super super long question name for testing purposes with","answerType":"Double","condition":null,"subSteps":null},{"key":"222","title":"Additional questions.","customQuestionId":"35d0063b-24c3-414f-ef07-08dacc8a22a7","questionText":"my new 123","answerType":"Integer","condition":null,"subSteps":null},{"key":"toptop","title":"Additional questions.","customQuestionId":"ad15fa06-4df8-461f-1e5f-08dacc84f270","questionText":"brand new custom question","answerType":"Double","condition":null,"subSteps":null},{"key":"topquest","title":"Additional questions.","customQuestionId":"bd5bfeaf-9fa2-46a2-4b21-08dacc813294","questionText":"question at the top","answerType":"Integer","condition":null,"subSteps":null},{"key":"wrqwr","title":"Additional questions.","customQuestionId":"643662ca-4ea8-4ae0-75a2-08dacc80e9ed","questionText":"new test qeustion","answerType":"Integer","condition":null,"subSteps":null},{"key":"customquestket111","title":"Additional questions.","customQuestionId":"98b56bd5-686e-454e-4e7b-08dacc78d0c0","questionText":"custom question test 111","answerType":"Integer","condition":null,"subSteps":null},{"key":"custquest6","title":"Additional questions.","customQuestionId":"fbb8ebf7-e3e8-4294-9069-08dacc6040e7","questionText":"custom question #2","answerType":"Integer","condition":null,"subSteps":null}]},{"key":"PersonalInfo","title":"Enter the information below to see your rates","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RateComparison","title":"Rate Comparison & Highlights","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FullPersonalInfo","title":"Personal Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CreditProfile","title":"Credit Profile","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyInformation","title":"Property Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"TitleHolder","title":"Title Holder","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"ResidenceInfo","title":"Residence Info","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Reo","title":"Additional Real Estate Owned","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Income","title":"Income","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DownPaymentSource","title":"Down Payment Source","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Assets","title":"Assets","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Declarations","title":"Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"DeclarationsGeneral","title":"General","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAndLoan","title":"Property and Loan Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"YourFinances","title":"Declarations about your finances","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"MilitaryServices","title":"Military Services","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DemographicInformation","title":"Demographic Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}]},{"key":"QuickReview","title":"Review","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FinalRateComparison","title":"Compare Terms","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}],"makingOfferOrSigningPurchaseContractSteps":[{"key":"TypeOfLoan","title":"What would you like to do today?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FirstTimeHomeBuyer","title":"Are you a first time home buyer?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurchaseProcessType","title":"Where are you in the process currently?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyType","title":"What kind of property are you interested in?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyUsageDetails","title":"Will this be a...","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAddress","title":"Property Address","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PurchasePrice","title":"Purchase Price","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CurrentCreditProfile","title":"Please give us an idea of your credit score","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DownPayment","title":"Down Payment","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"WorkingWithRealtor","title":"Are you working with a realtor?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RealtorInLoop","title":"Do you want to keep your realtor in the loop?","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RealtorInfo","title":"Great! Let's add their info to keep them up to date","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"AdditionalQuestions","title":"Additional questions.","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"assignmentQ4","title":"Additional questions.","customQuestionId":"2ac071aa-471d-44ac-971b-08dad9f71e1a","questionText":"assignment 4","answerType":"Bool","condition":null,"subSteps":null},{"key":"q3","title":"Additional questions.","customQuestionId":"c963067e-7549-4c62-5848-08dada0a0132","questionText":"q33","answerType":"Integer","condition":null,"subSteps":null},{"key":"CQ002","title":"Additional questions.","customQuestionId":"c8ff6be9-273f-45b3-971a-08dad9f71e1a","questionText":"CQ 00245","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ3","title":"Additional questions.","customQuestionId":"0191cc1d-9b00-4ca9-5847-08dada0a0132","questionText":"assignment Q3","answerType":"Text","condition":null,"subSteps":null},{"key":"assignmentQ2","title":"Additional questions.","customQuestionId":"577a5d48-3715-4cfa-9719-08dad9f71e1a","questionText":"assignment Q2","answerType":"Integer","condition":null,"subSteps":null},{"key":"assignmentQ1","title":"Additional questions.","customQuestionId":"2ce80aca-9626-4c34-530e-08dada09e879","questionText":"assignment Q1","answerType":"Integer","condition":null,"subSteps":null},{"key":"asdasd","title":"Additional questions.","customQuestionId":"07cb2d7c-27c8-4346-cb8a-08dacef6a3fd","questionText":"tasd","answerType":"Text","condition":null,"subSteps":null},{"key":"test5","title":"Additional questions.","customQuestionId":"7472d4bf-0b52-4888-4d10-08dace251f9e","questionText":"test question 5","answerType":"Text","condition":null,"subSteps":null},{"key":"test","title":"Additional questions.","customQuestionId":"942fa778-a110-489a-46f2-08dace155a1f","questionText":"Add new question","answerType":"Text","condition":null,"subSteps":null},{"key":"newcustomquestion1","title":"Additional questions.","customQuestionId":"7298e0a9-7f4b-4e1a-46f1-08dace155a1f","questionText":"new custom question 12","answerType":"Integer","condition":null,"subSteps":null},{"key":"superlongquestion","title":"Additional questions.","customQuestionId":"0c160e12-12dd-42ee-f614-08dacc9b479f","questionText":"Super super super long question name for testing purposes with","answerType":"Double","condition":null,"subSteps":null},{"key":"222","title":"Additional questions.","customQuestionId":"35d0063b-24c3-414f-ef07-08dacc8a22a7","questionText":"my new 123","answerType":"Integer","condition":null,"subSteps":null},{"key":"toptop","title":"Additional questions.","customQuestionId":"ad15fa06-4df8-461f-1e5f-08dacc84f270","questionText":"brand new custom question","answerType":"Double","condition":null,"subSteps":null},{"key":"topquest","title":"Additional questions.","customQuestionId":"bd5bfeaf-9fa2-46a2-4b21-08dacc813294","questionText":"question at the top","answerType":"Integer","condition":null,"subSteps":null},{"key":"wrqwr","title":"Additional questions.","customQuestionId":"643662ca-4ea8-4ae0-75a2-08dacc80e9ed","questionText":"new test qeustion","answerType":"Integer","condition":null,"subSteps":null},{"key":"customquestket111","title":"Additional questions.","customQuestionId":"98b56bd5-686e-454e-4e7b-08dacc78d0c0","questionText":"custom question test 111","answerType":"Integer","condition":null,"subSteps":null},{"key":"custquest6","title":"Additional questions.","customQuestionId":"fbb8ebf7-e3e8-4294-9069-08dacc6040e7","questionText":"custom question #2","answerType":"Integer","condition":null,"subSteps":null}]},{"key":"PersonalInfo","title":"Enter the information below to see your rates","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"RateComparison","title":"Rate Comparison & Highlights","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FullPersonalInfo","title":"Personal Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"CreditProfile","title":"Credit Profile","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyInformation","title":"Property Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"TitleHolder","title":"Title Holder","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"ResidenceInfo","title":"Residence Info","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Reo","title":"Additional Real Estate Owned","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Income","title":"Income","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DownPaymentSource","title":"Down Payment Source","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Assets","title":"Assets","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"Declarations","title":"Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":[{"key":"DeclarationsGeneral","title":"General","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"PropertyAndLoan","title":"Property and Loan Declarations","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"YourFinances","title":"Declarations about your finances","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"MilitaryServices","title":"Military Services","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"DemographicInformation","title":"Demographic Information","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}]},{"key":"QuickReview","title":"Review","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null},{"key":"FinalRateComparison","title":"Compare Terms","customQuestionId":null,"questionText":null,"answerType":null,"condition":null,"subSteps":null}]}}
// const dataWithCQ = {
//     "company": {
//         "companyId": "28be0d4f-5900-4ebb-9a76-d20f82f91be2",
//         "name": "Brokers Mortgage",
//         "approved": true,
//         "gtmId": null,
//         "nmlsId": null,
//         "phoneNumber": null,
//         "webSite": null,
//         "emailAddress": null,
//         "city": null,
//         "state": null,
//         "zip": null,
//         "address": null,
//         "consentLink": null,
//         "termsLink": null,
//         "title": "Brokers Mortgage | Low Rates Zero Fees* Zero Hassles"
//     },
//     "applyFormUiSetting": {
//         "applyFormUiSettingId": "db7bc8d3-cf40-4505-89a4-08da73a9a169",
//         "companyId": "28be0d4f-5900-4ebb-9a76-d20f82f91be2",
//         "settings": "{\"colors\":{\"primary\":{\"main\":\"#F54A90\",\"accent\":\"#FFF6FB\"},\"secondary\":{\"background\":\"#FFF6FB\",\"accent\":\"#F54A90\"}},\"logoUrl\":\"https://ifskynetstagestorage.blob.core.windows.net/public/500040d2-fed4-498e-b9cc-64c1d6d5ef0c/94d74082-3361-4ac5-ba32-399bb77d50e7\"}"
//     },
//     "stepFlows": {
//         "refinanceSteps": [
//             {
//                 "key": "TypeOfLoan",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyType",
//                 "title": "What kind of property are you interested in?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyUsageDetails",
//                 "title": "Will this be a...",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyAddress",
//                 "title": "Property Address",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyValue",
//                 "title": "Property Value",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentMortgageBalance",
//                 "title": "How much do you owe on your current mortgage?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurposeOfRefinance",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentCreditProfile",
//                 "title": "Please give us an idea of your credit score",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "AdditionalQuestions",
//                 "title": "Additional Questions",
//                 "condition": null,
//                 "subSteps": [
//                     {
//                         "key": "Question1",
//                         // "customQuestionKey": "Question1",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "1111111", 
//                         "questionText": "Who is it 1?",
//                         "answerType": "Text"
//                     },
//                     {
//                         "key": "Question2",
//                         // "customQuestionKey": "Question2",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "22222222", 
//                         "questionText": "Who is it 2?",
//                         "answerType": "Integer"
//                     },
//                     {
//                         "key": "Question3",
//                         // "customQuestionKey": "Question3",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "333333333", 
//                         "questionText": "Who is it 3?",
//                         "answerType": "Bool"
//                     },
//                 ]
//             },
//             {
//                 "key": "PersonalInfo",
//                 "title": "Enter the information below to see your rates",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RateComparison",
//                 "title": "Rate Comparison & Highlights",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FullPersonalInfo",
//                 "title": "Personal Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CreditProfile",
//                 "title": "Credit Profile",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyInformation",
//                 "title": "Property Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "TitleHolder",
//                 "title": "Title Holder",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "ResidenceInfo",
//                 "title": "Residence Info",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Reo",
//                 "title": "Additional Real Estate Owned",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Income",
//                 "title": "Income",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Assets",
//                 "title": "Assets",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Declarations",
//                 "title": "Declarations",
//                 "condition": null,
//                 "subSteps": [
//                     {
//                         "key": "DeclarationsGeneral",
//                         "title": "General",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "PropertyAndLoan",
//                         "title": "Property and Loan Declarations",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "YourFinances",
//                         "title": "Declarations about your finances",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "MilitaryServices",
//                         "title": "Military Services",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "DemographicInformation",
//                         "title": "Demographic Information",
//                         "condition": null,
//                         "subSteps": null
//                     }
//                 ]
//             },
//             {
//                 "key": "QuickReview",
//                 "title": "Review",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FinalRateComparison",
//                 "title": "Compare Terms",
//                 "condition": null,
//                 "subSteps": null
//             }
//         ],
//         "cashOutRefinanceSteps": [
//             {
//                 "key": "TypeOfLoan",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyType",
//                 "title": "What kind of property are you interested in?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyUsageDetails",
//                 "title": "Will this be a...",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyAddress",
//                 "title": "Property Address",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyValue",
//                 "title": "Property Value",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentMortgageBalance",
//                 "title": "How much do you owe on your current mortgage?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurposeOfRefinance",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CashOutAmount",
//                 "title": "Cash Out Amount",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentCreditProfile",
//                 "title": "Please give us an idea of your credit score",
//                 "condition": null,
//                 "subSteps": null
//             },

//              {
//                 "key": "AdditionalQuestions",
//                 "title": "Additional Questions",
//                 "condition": null,
//                "subSteps": [
//                     {
//                         "key": "Question1",
//                         // "customQuestionKey": "Question1",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "1111111", 
//                         "questionText": "Who is it 1?",
//                         "answerType": "Text"
//                     },
//                     {
//                         "key": "Question2",
//                         // "customQuestionKey": "Question2",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "22222222", 
//                         "questionText": "Who is it 2?",
//                         "answerType": "Integer"
//                     },
//                     {
//                         "key": "Question3",
//                         // "customQuestionKey": "Question3",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "333333333", 
//                         "questionText": "Who is it 3?",
//                         "answerType": "Bool"
//                     },
//                 ]
//             },
//             {
//                 "key": "PersonalInfo",
//                 "title": "Enter the information below to see your rates",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RateComparison",
//                 "title": "Rate Comparison & Highlights",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FullPersonalInfo",
//                 "title": "Personal Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CreditProfile",
//                 "title": "Credit Profile",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyInformation",
//                 "title": "Property Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "TitleHolder",
//                 "title": "Title Holder",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "ResidenceInfo",
//                 "title": "Residence Info",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Reo",
//                 "title": "Additional Real Estate Owned",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Income",
//                 "title": "Income",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Assets",
//                 "title": "Assets",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Declarations",
//                 "title": "Declarations",
//                 "condition": null,
//                 "subSteps": [
//                     {
//                         "key": "DeclarationsGeneral",
//                         "title": "General",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "PropertyAndLoan",
//                         "title": "Property and Loan Declarations",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "YourFinances",
//                         "title": "Declarations about your finances",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "MilitaryServices",
//                         "title": "Military Services",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "DemographicInformation",
//                         "title": "Demographic Information",
//                         "condition": null,
//                         "subSteps": null
//                     }
//                 ]
//             },
//             {
//                 "key": "QuickReview",
//                 "title": "Review",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FinalRateComparison",
//                 "title": "Compare Terms",
//                 "condition": null,
//                 "subSteps": null
//             }
//         ],
//         "signedPurchasedContractSteps": [
//             {
//                 "key": "TypeOfLoan",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FirstTimeHomeBuyer",
//                 "title": "Are you a first time home buyer?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurchaseProcessType",
//                 "title": "Where are you in the process currently?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyType",
//                 "title": "What kind of property are you interested in?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyUsageDetails",
//                 "title": "Will this be a...",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyAddress",
//                 "title": "Property Address",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurchasePrice",
//                 "title": "Purchase Price",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentCreditProfile",
//                 "title": "Please give us an idea of your credit score",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "DownPayment",
//                 "title": "Down Payment",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "WorkingWithRealtor",
//                 "title": "Are you working with a realtor?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RealtorInLoop",
//                 "title": "Do you want to keep your realtor in the loop?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RealtorInfo",
//                 "title": "Great! Let's add their info to keep them up to date",
//                 "condition": null,
//                 "subSteps": null
//             },
//              {
//                 "key": "AdditionalQuestions",
//                 "title": "Additional Questions",
//                 "condition": null,
//                "subSteps": [
//                     {
//                         "key": "Question1",
//                         // "customQuestionKey": "Question1",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "1111111", 
//                         "questionText": "Who is it 1?",
//                         "answerType": "Text"
//                     },
//                     {
//                         "key": "Question2",
//                         // "customQuestionKey": "Question2",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "22222222", 
//                         "questionText": "Who is it 2?",
//                         "answerType": "Integer"
//                     },
//                     {
//                         "key": "Question3",
//                         // "customQuestionKey": "Question3",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "333333333", 
//                         "questionText": "Who is it 3?",
//                         "answerType": "Bool"
//                     },
//                 ]
//             },
//             {
//                 "key": "PersonalInfo",
//                 "title": "Enter the information below to see your rates",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RateComparison",
//                 "title": "Rate Comparison & Highlights",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FullPersonalInfo",
//                 "title": "Personal Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CreditProfile",
//                 "title": "Credit Profile",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyInformation",
//                 "title": "Property Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "TitleHolder",
//                 "title": "Title Holder",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "ResidenceInfo",
//                 "title": "Residence Info",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Reo",
//                 "title": "Additional Real Estate Owned",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Income",
//                 "title": "Income",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "DownPaymentSource",
//                 "title": "Down Payment Source",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Assets",
//                 "title": "Assets",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Declarations",
//                 "title": "Declarations",
//                 "condition": null,
//                 "subSteps": [
//                     {
//                         "key": "DeclarationsGeneral",
//                         "title": "General",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "PropertyAndLoan",
//                         "title": "Property and Loan Declarations",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "YourFinances",
//                         "title": "Declarations about your finances",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "MilitaryServices",
//                         "title": "Military Services",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "DemographicInformation",
//                         "title": "Demographic Information",
//                         "condition": null,
//                         "subSteps": null
//                     }
//                 ]
//             },
//             {
//                 "key": "QuickReview",
//                 "title": "Review",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FinalRateComparison",
//                 "title": "Compare Terms",
//                 "condition": null,
//                 "subSteps": null
//             }
//         ],
//         "searchingOrShoppingAroundSteps": [
//             {
//                 "key": "TypeOfLoan",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FirstTimeHomeBuyer",
//                 "title": "Are you a first time home buyer?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurchaseProcessType",
//                 "title": "Where are you in the process currently?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyType",
//                 "title": "What kind of property are you interested in?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyUsageDetails",
//                 "title": "Will this be a...",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurchaseLocation",
//                 "title": "Property Address",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Budget",
//                 "title": "What kind of budget are we working with?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentCreditProfile",
//                 "title": "Please give us an idea of your credit score",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "DownPayment",
//                 "title": "Down Payment",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "WorkingWithRealtor",
//                 "title": "Are you working with a realtor?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RealtorInLoop",
//                 "title": "Do you want to keep your realtor in the loop?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RealtorInfo",
//                 "title": "Great! Let's add their info to keep them up to date",
//                 "condition": null,
//                 "subSteps": null
//             },
//              {
//                 "key": "AdditionalQuestions",
//                 "title": "Additional Questions",
//                 "condition": null,
//                "subSteps": [
//                     {
//                         "key": "Question1",
//                         // "customQuestionKey": "Question1",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "1111111", 
//                         "questionText": "Who is it 1?",
//                         "answerType": "Text"
//                     },
//                     {
//                         "key": "Question2",
//                         // "customQuestionKey": "Question2",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "22222222", 
//                         "questionText": "Who is it 2?",
//                         "answerType": "Integer"
//                     },
//                     {
//                         "key": "Question3",
//                         // "customQuestionKey": "Question3",
//                         "title": "Additional Questions",
//                         "condition": null,
//                         "subSteps": null,
//                         "customQuestionId": "333333333", 
//                         "questionText": "Who is it 3?",
//                         "answerType": "Bool"
//                     },
//                 ]
//             },
//             {
//                 "key": "PersonalInfo",
//                 "title": "Enter the information below to see your rates",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RateComparison",
//                 "title": "Rate Comparison & Highlights",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FullPersonalInfo",
//                 "title": "Personal Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CreditProfile",
//                 "title": "Credit Profile",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyInformation",
//                 "title": "Property Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "TitleHolder",
//                 "title": "Title Holder",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "ResidenceInfo",
//                 "title": "Residence Info",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Reo",
//                 "title": "Additional Real Estate Owned",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Income",
//                 "title": "Income",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "DownPaymentSource",
//                 "title": "Down Payment Source",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Assets",
//                 "title": "Assets",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Declarations",
//                 "title": "Declarations",
//                 "condition": null,
//                 "subSteps": [
//                     {
//                         "key": "DeclarationsGeneral",
//                         "title": "General",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "PropertyAndLoan",
//                         "title": "Property and Loan Declarations",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "YourFinances",
//                         "title": "Declarations about your finances",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "MilitaryServices",
//                         "title": "Military Services",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "DemographicInformation",
//                         "title": "Demographic Information",
//                         "condition": null,
//                         "subSteps": null
//                     }
//                 ]
//             },
//             {
//                 "key": "QuickReview",
//                 "title": "Review",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FinalRateComparison",
//                 "title": "Compare Terms",
//                 "condition": null,
//                 "subSteps": null
//             }
//         ],
//         "makingOfferOrSigningPurchaseContractSteps": [
//             {
//                 "key": "TypeOfLoan",
//                 "title": "What would you like to do today?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FirstTimeHomeBuyer",
//                 "title": "Are you a first time home buyer?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurchaseProcessType",
//                 "title": "Where are you in the process currently?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyType",
//                 "title": "What kind of property are you interested in?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyUsageDetails",
//                 "title": "Will this be a...",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyAddress",
//                 "title": "Property Address",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PurchasePrice",
//                 "title": "Purchase Price",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CurrentCreditProfile",
//                 "title": "Please give us an idea of your credit score",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "DownPayment",
//                 "title": "Down Payment",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "WorkingWithRealtor",
//                 "title": "Are you working with a realtor?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RealtorInLoop",
//                 "title": "Do you want to keep your realtor in the loop?",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RealtorInfo",
//                 "title": "Great! Let's add their info to keep them up to date",
//                 "condition": null,
//                 "subSteps": null
//             },
//              {
//                 "key": "AdditionalQuestions",
//                 "title": "Additional Questions",
//                 "condition": null,
//                "subSteps": [
//                      {
//                          "key": "Question1",
//                          // "customQuestionKey": "Question1",
//                          "title": "Additional Questions",
//                          "condition": null,
//                          "subSteps": null,
//                          "customQuestionId": "1111111", 
//                          "questionText": "Who is it 1?",
//                          "answerType": "Text"
//                      },
//                      {
//                          "key": "Question2",
//                          // "customQuestionKey": "Question2",
//                          "title": "Additional Questions",
//                          "condition": null,
//                          "subSteps": null,
//                          "customQuestionId": "22222222", 
//                          "questionText": "Who is it 2?",
//                          "answerType": "Integer"
//                      },
//                      {
//                          "key": "Question3",
//                          // "customQuestionKey": "Question3",
//                          "title": "Additional Questions",
//                          "condition": null,
//                          "subSteps": null,
//                          "customQuestionId": "333333333", 
//                          "questionText": "Who is it 3?",
//                          "answerType": "Bool"
//                      },
//                  ]
//             },
//             {
//                 "key": "PersonalInfo",
//                 "title": "Enter the information below to see your rates",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "RateComparison",
//                 "title": "Rate Comparison & Highlights",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FullPersonalInfo",
//                 "title": "Personal Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "CreditProfile",
//                 "title": "Credit Profile",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "PropertyInformation",
//                 "title": "Property Information",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "TitleHolder",
//                 "title": "Title Holder",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "ResidenceInfo",
//                 "title": "Residence Info",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Reo",
//                 "title": "Additional Real Estate Owned",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Income",
//                 "title": "Income",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "DownPaymentSource",
//                 "title": "Down Payment Source",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Assets",
//                 "title": "Assets",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "Declarations",
//                 "title": "Declarations",
//                 "condition": null,
//                 "subSteps": [
//                     {
//                         "key": "DeclarationsGeneral",
//                         "title": "General",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "PropertyAndLoan",
//                         "title": "Property and Loan Declarations",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "YourFinances",
//                         "title": "Declarations about your finances",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "MilitaryServices",
//                         "title": "Military Services",
//                         "condition": null,
//                         "subSteps": null
//                     },
//                     {
//                         "key": "DemographicInformation",
//                         "title": "Demographic Information",
//                         "condition": null,
//                         "subSteps": null
//                     }
//                 ]
//             },
//             {
//                 "key": "QuickReview",
//                 "title": "Review",
//                 "condition": null,
//                 "subSteps": null
//             },
//             {
//                 "key": "FinalRateComparison",
//                 "title": "Compare Terms",
//                 "condition": null,
//                 "subSteps": null
//             }
//         ]
//     }
// }

const app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type', 'domainName');
    res.setHeader('Access-Control-Allow-Headers', '*');
    // res.setHeader('Access-Control-Allow-Credentials', true);
 //    res.setHeader('Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;');
 //    res.setHeader('X-Content-Security-Policy: default-src *; connect-src *; script-src *; object-src *;');
    // res.setHeader('X-Webkit-CSP: default-src *; connect-src *; script-src "unsafe-inline" "unsafe-eval" *; object-src *;');



    next();
});
app.get('/custom-questions', (req, res) => {
    const questions = [
                    {
                        "key": "Question1",
                        "title": "Additional Question",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "1111111", 
                        "questionText": "Who is it 1?",
                        "answerType": "Text"
                    },
                    {
                        "key": "Question2",
                        "title": "Additional Question",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "22222222", 
                        "questionText": "Who is it 2?",
                        "answerType": "Integer"
                    },
                    {
                        "key": "Question3",
                        "title": "Additional Question",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "333333333", 
                        "questionText": "Who is it 3?",
                        "answerType": "Bool"
                    },
                ];
    res.status(200).send(questions);
})
app.get('/company/v1', (req, res) => {
    res.status(200).send(dataWithCQ);
})

app.get('/bad-request-error', (req, res) => {
    console.log('Got Request');

    const errors = [{
        item: '0',
        field: 'Email',
        description: 'Please, provide correct email address!'
    }, 
    {
        item: '1',
        field: 'Phone',
        description: 'Please, provide correct phone number!'
    }]

    res.status(400).send(errors)
})

app.get('/error', (req, res) => {
    res.status(401).send('Error!')
})

app.get('/test', (req, res) => {
    res.status(200).send('Success request!')
})

app.get('/verify', async (req, res) => {
    const { token, version } = req.query;
    const secret_v2 = "6Le_9fggAAAAACgCg3YiEYM_xnmDGdQaqYm-UJLR";
    const secret_v3 = "6Leou_IgAAAAAGMeifAGDtQhsRDfhh1LMERnUy0-";
    let secret = '';

    console.log(version)

    if (version === 'v2') {
        secret = secret_v2
    } else {
        secret = secret_v3
    }

    const { data } = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`)

    res.status(200).send(data)

})

const server = http.createServer(app)
const port = 5001;

server.listen(port, () => {
    console.log('Server has been started!')
})