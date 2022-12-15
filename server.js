const express = require('express');
const http = require('http');
const axios = require('axios');
const dataWithCQ = {
    "company": {
        "companyId": "28be0d4f-5900-4ebb-9a76-d20f82f91be2",
        "name": "Brokers Mortgage",
        "approved": true,
        "gtmId": null,
        "nmlsId": null,
        "phoneNumber": null,
        "webSite": null,
        "emailAddress": null,
        "city": null,
        "state": null,
        "zip": null,
        "address": null,
        "consentLink": null,
        "termsLink": null,
        "title": "Brokers Mortgage | Low Rates Zero Fees* Zero Hassles"
    },
    "applyFormUiSetting": {
        "applyFormUiSettingId": "db7bc8d3-cf40-4505-89a4-08da73a9a169",
        "companyId": "28be0d4f-5900-4ebb-9a76-d20f82f91be2",
        "settings": "{\"colors\":{\"primary\":{\"main\":\"#F54A90\",\"accent\":\"#FFF6FB\"},\"secondary\":{\"background\":\"#FFF6FB\",\"accent\":\"#F54A90\"}},\"logoUrl\":\"https://ifskynetstagestorage.blob.core.windows.net/public/500040d2-fed4-498e-b9cc-64c1d6d5ef0c/94d74082-3361-4ac5-ba32-399bb77d50e7\"}"
    },
    "stepFlows": {
        "refinanceSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyValue",
                "title": "Property Value",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentMortgageBalance",
                "title": "How much do you owe on your current mortgage?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurposeOfRefinance",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "AdditionalQuestions",
                "title": "Additional Questions",
                "condition": null,
                "subSteps": [
                    {
                        "key": "Question1",
                        // "customQuestionKey": "Question1",
                        "title": "Question 1",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "1111111", 
                        "questionText": "Who is it 1?",
                        "answerType": "Text"
                    },
                    {
                        "key": "Question2",
                        // "customQuestionKey": "Question2",
                        "title": "Question 2",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "22222222", 
                        "questionText": "Who is it 2?",
                        "answerType": "Number"
                    },
                    {
                        "key": "Question3",
                        // "customQuestionKey": "Question3",
                        "title": "Question 3",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "333333333", 
                        "questionText": "Who is it 3?",
                        "answerType": "Text"
                    },
                ]
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "cashOutRefinanceSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyValue",
                "title": "Property Value",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentMortgageBalance",
                "title": "How much do you owe on your current mortgage?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurposeOfRefinance",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CashOutAmount",
                "title": "Cash Out Amount",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },

             {
                "key": "AdditionalQuestions",
                "title": "Additional Questions",
                "condition": null,
                "subSteps": [
                    {
                        "key": "Question1",
                        // "customQuestionKey": "Question1",
                        "title": "Question 1",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "1111111", 
                        "questionText": "Who is it 1?",
                        "answerType": "Text"
                    },
                    {
                        "key": "Question2",
                        // "customQuestionKey": "Question2",
                        "title": "Question 2",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "22222222", 
                        "questionText": "Who is it 2?",
                        "answerType": "Number"
                    },
                    {
                        "key": "Question3",
                        // "customQuestionKey": "Question3",
                        "title": "Question 3",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "333333333", 
                        "questionText": "Who is it 3?",
                        "answerType": "Text"
                    },
                ]
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "signedPurchasedContractSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FirstTimeHomeBuyer",
                "title": "Are you a first time home buyer?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseProcessType",
                "title": "Where are you in the process currently?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchasePrice",
                "title": "Purchase Price",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPayment",
                "title": "Down Payment",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "WorkingWithRealtor",
                "title": "Are you working with a realtor?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInLoop",
                "title": "Do you want to keep your realtor in the loop?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInfo",
                "title": "Great! Let's add their info to keep them up to date",
                "condition": null,
                "subSteps": null
            },
             {
                "key": "AdditionalQuestions",
                "title": "Additional Questions",
                "condition": null,
               "subSteps": [
                    {
                        "key": "Question1",
                        // "customQuestionKey": "Question1",
                        "title": "Question 1",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "1111111", 
                        "questionText": "Who is it 1?",
                        "answerType": "Text"
                    },
                    {
                        "key": "Question2",
                        // "customQuestionKey": "Question2",
                        "title": "Question 2",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "22222222", 
                        "questionText": "Who is it 2?",
                        "answerType": "Number"
                    },
                    {
                        "key": "Question3",
                        // "customQuestionKey": "Question3",
                        "title": "Question 3",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "333333333", 
                        "questionText": "Who is it 3?",
                        "answerType": "Text"
                    },
                ]
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPaymentSource",
                "title": "Down Payment Source",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "searchingOrShoppingAroundSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FirstTimeHomeBuyer",
                "title": "Are you a first time home buyer?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseProcessType",
                "title": "Where are you in the process currently?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseLocation",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Budget",
                "title": "What kind of budget are we working with?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPayment",
                "title": "Down Payment",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "WorkingWithRealtor",
                "title": "Are you working with a realtor?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInLoop",
                "title": "Do you want to keep your realtor in the loop?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInfo",
                "title": "Great! Let's add their info to keep them up to date",
                "condition": null,
                "subSteps": null
            },
             {
                "key": "AdditionalQuestions",
                "title": "Additional Questions",
                "condition": null,
               "subSteps": [
                    {
                        "key": "Question1",
                        // "customQuestionKey": "Question1",
                        "title": "Question 1",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "1111111", 
                        "questionText": "Who is it 1?",
                        "answerType": "Text"
                    },
                    {
                        "key": "Question2",
                        // "customQuestionKey": "Question2",
                        "title": "Question 2",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "22222222", 
                        "questionText": "Who is it 2?",
                        "answerType": "Number"
                    },
                    {
                        "key": "Question3",
                        // "customQuestionKey": "Question3",
                        "title": "Question 3",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "333333333", 
                        "questionText": "Who is it 3?",
                        "answerType": "Text"
                    },
                ]
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPaymentSource",
                "title": "Down Payment Source",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "makingOfferOrSigningPurchaseContractSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FirstTimeHomeBuyer",
                "title": "Are you a first time home buyer?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseProcessType",
                "title": "Where are you in the process currently?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchasePrice",
                "title": "Purchase Price",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPayment",
                "title": "Down Payment",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "WorkingWithRealtor",
                "title": "Are you working with a realtor?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInLoop",
                "title": "Do you want to keep your realtor in the loop?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInfo",
                "title": "Great! Let's add their info to keep them up to date",
                "condition": null,
                "subSteps": null
            },
             {
                "key": "AdditionalQuestions",
                "title": "Additional Questions",
                "condition": null,
               "subSteps": [
                    {
                        "key": "Question1",
                        // "customQuestionKey": "Question1",
                        "title": "Question 1",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "1111111", 
                        "questionText": "Who is it 1?",
                        "answerType": "Text"
                    },
                    {
                        "key": "Question2",
                        // "customQuestionKey": "Question2",
                        "title": "Question 2",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "22222222", 
                        "questionText": "Who is it 2?",
                        "answerType": "Number"
                    },
                    {
                        "key": "Question3",
                        // "customQuestionKey": "Question3",
                        "title": "Question 3",
                        "condition": null,
                        "subSteps": null,
                        "customQuestionId": "333333333", 
                        "questionText": "Who is it 3?",
                        "answerType": "Text"
                    },
                ]
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPaymentSource",
                "title": "Down Payment Source",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ]
    }
}
const dataWithoutCQ = {
    "company": {
        "companyId": "28be0d4f-5900-4ebb-9a76-d20f82f91be2",
        "name": "Brokers Mortgage",
        "approved": true,
        "gtmId": null,
        "nmlsId": null,
        "phoneNumber": null,
        "webSite": null,
        "emailAddress": null,
        "city": null,
        "state": null,
        "zip": null,
        "address": null,
        "consentLink": null,
        "termsLink": null,
        "title": "Brokers Mortgage | Low Rates Zero Fees* Zero Hassles"
    },
    "applyFormUiSetting": {
        "applyFormUiSettingId": "db7bc8d3-cf40-4505-89a4-08da73a9a169",
        "companyId": "28be0d4f-5900-4ebb-9a76-d20f82f91be2",
        "settings": "{\"colors\":{\"primary\":{\"main\":\"#F54A90\",\"accent\":\"#FFF6FB\"},\"secondary\":{\"background\":\"#FFF6FB\",\"accent\":\"#F54A90\"}},\"logoUrl\":\"https://ifskynetstagestorage.blob.core.windows.net/public/500040d2-fed4-498e-b9cc-64c1d6d5ef0c/94d74082-3361-4ac5-ba32-399bb77d50e7\"}"
    },
    "stepFlows": {
        "refinanceSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyValue",
                "title": "Property Value",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentMortgageBalance",
                "title": "How much do you owe on your current mortgage?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurposeOfRefinance",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "cashOutRefinanceSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyValue",
                "title": "Property Value",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentMortgageBalance",
                "title": "How much do you owe on your current mortgage?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurposeOfRefinance",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CashOutAmount",
                "title": "Cash Out Amount",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "signedPurchasedContractSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FirstTimeHomeBuyer",
                "title": "Are you a first time home buyer?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseProcessType",
                "title": "Where are you in the process currently?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchasePrice",
                "title": "Purchase Price",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPayment",
                "title": "Down Payment",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "WorkingWithRealtor",
                "title": "Are you working with a realtor?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInLoop",
                "title": "Do you want to keep your realtor in the loop?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInfo",
                "title": "Great! Let's add their info to keep them up to date",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPaymentSource",
                "title": "Down Payment Source",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "searchingOrShoppingAroundSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FirstTimeHomeBuyer",
                "title": "Are you a first time home buyer?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseProcessType",
                "title": "Where are you in the process currently?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseLocation",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Budget",
                "title": "What kind of budget are we working with?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPayment",
                "title": "Down Payment",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "WorkingWithRealtor",
                "title": "Are you working with a realtor?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInLoop",
                "title": "Do you want to keep your realtor in the loop?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInfo",
                "title": "Great! Let's add their info to keep them up to date",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPaymentSource",
                "title": "Down Payment Source",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ],
        "makingOfferOrSigningPurchaseContractSteps": [
            {
                "key": "TypeOfLoan",
                "title": "What would you like to do today?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FirstTimeHomeBuyer",
                "title": "Are you a first time home buyer?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchaseProcessType",
                "title": "Where are you in the process currently?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyType",
                "title": "What kind of property are you interested in?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyUsageDetails",
                "title": "Will this be a...",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyAddress",
                "title": "Property Address",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PurchasePrice",
                "title": "Purchase Price",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CurrentCreditProfile",
                "title": "Please give us an idea of your credit score",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPayment",
                "title": "Down Payment",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "WorkingWithRealtor",
                "title": "Are you working with a realtor?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInLoop",
                "title": "Do you want to keep your realtor in the loop?",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RealtorInfo",
                "title": "Great! Let's add their info to keep them up to date",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PersonalInfo",
                "title": "Enter the information below to see your rates",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "RateComparison",
                "title": "Rate Comparison & Highlights",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FullPersonalInfo",
                "title": "Personal Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "CreditProfile",
                "title": "Credit Profile",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "PropertyInformation",
                "title": "Property Information",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "TitleHolder",
                "title": "Title Holder",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "ResidenceInfo",
                "title": "Residence Info",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Reo",
                "title": "Additional Real Estate Owned",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Income",
                "title": "Income",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "DownPaymentSource",
                "title": "Down Payment Source",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Assets",
                "title": "Assets",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "Declarations",
                "title": "Declarations",
                "condition": null,
                "subSteps": [
                    {
                        "key": "DeclarationsGeneral",
                        "title": "General",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "PropertyAndLoan",
                        "title": "Property and Loan Declarations",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "YourFinances",
                        "title": "Declarations about your finances",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "MilitaryServices",
                        "title": "Military Services",
                        "condition": null,
                        "subSteps": null
                    },
                    {
                        "key": "DemographicInformation",
                        "title": "Demographic Information",
                        "condition": null,
                        "subSteps": null
                    }
                ]
            },
            {
                "key": "QuickReview",
                "title": "Review",
                "condition": null,
                "subSteps": null
            },
            {
                "key": "FinalRateComparison",
                "title": "Compare Terms",
                "condition": null,
                "subSteps": null
            }
        ]
    }
}

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