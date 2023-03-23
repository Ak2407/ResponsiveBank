import * as Yup from "yup";



export const updateBankDetailSchema = Yup.object ({
    holderName: Yup.string().min(2).max(15).required("This is an required Field"),
    accNo : Yup.string().min(5).max(10).required("This is an required Field"),
    ifsc : Yup.string().min(2).max(5).required("This is an required Field"),
    bankName : Yup.string().min(2).max(25).required("This is an required Field"),
    bankCity : Yup.string().min(2).max(20).required("This is an required Field"),
    branchName : Yup.string().min(2).max(20).required("This is an required Field"),
    relation : Yup.string().min(2).max(20).required("This is an required Field"),
    consent : Yup.boolean().oneOf([true],'Please click the box for consent')
});