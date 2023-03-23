import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { RiLinksFill } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import Input from "../components/Input";
import Button from "../components/Button";
import { updateBankDetailSchema } from "../schemas";
import { useFormik } from "formik";

const initialValues = {
  holderName: "",
  accNo: "",
  ifsc: "",
  bankName: "",
  bankCity: "",
  branchName: "",
  relation: "",
  consent: "",
};

const Update = () => {
  const [filled, setFilled] = useState(false);
  const [isMenu, SetisMenu] = useState(false);
  {
    isMenu
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: updateBankDetailSchema,
      enableReinitialize: true,
      onSubmit: (values, action) => {
        setFilled(true);
      },
    });

  const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();

  function menuClick() {
    SetisMenu(!isMenu);
  }

  return (
    <div className="update-screen min-h-screen flex flex-col">
      <div className="update-nav">
        <Navbar />
      </div>
      <div className="navbar bg-white h-[86px] flex flex-row items-center gap-[20px] px-6 border-b-2 border-gray-200 w-full sm:hidden ">
        {isMenu ? (
          <HiOutlineArrowNarrowLeft
            className="text-[40px] cursor-pointer"
            onClick={() => menuClick()}
          />
        ) : (
          <AiOutlineMenu className="text-[30px]" onClick={() => menuClick()} />
        )}
      </div>
      <div className="main-section flex  h-[120vh]">
        <div
          className={`sidebar border-r-2 base:w-[350px] sm:flex flex-col sm:w-[300px] ${
            isMenu ? `` : `hidden`
          } fixed bg-white w-full h-full  sm:static`}
        >
          <div className="backbtn  pl-6 mb-10">
            {isMenu ? (
              <></>
            ) : (
              <HiOutlineArrowNarrowLeft className="text-[40px] cursor-pointer" />
            )}
          </div>
          <div className="sidebar-links-section flex flex-col pl-10 gap-10">
            <div className="sidebar-link flex items-center justify-between gap-2 cursor-pointer w-5/6 p-3 sm:rounded sm:border-b-0 border-b-[1px] border-gray-300 rounded-none">
              <div className="flex gap-10  flex-1">
                <MdDashboard className="text-[30px] " />
                <h1 className="sm:text-base sm:font-light font-bold text-[22px]">
                  My Dashboard
                </h1>
              </div>
              <SlArrowRight className="text-[20px] " />
            </div>
            <div className="sidebar-link flex items-center justify-between cursor-pointer w-5/6 p-3 sm:rounded  sm:border-b-0 border-b-[1px] border-gray-300 rounded-none">
              <div className="flex gap-10  flex-1">
                <RiLinksFill className="text-[30px] " />
                <h1 className="sm:text-base  sm:font-light font-bold text-[22px]">
                  TOTM links
                </h1>
              </div>
              <SlArrowRight className="text-[20px] " />
            </div>
            <div className="sidebar-link flex items-center justify-between cursor-pointer w-5/6 p-3 sm:rounded sm:border-b-0 border-b-[1px] border-gray-300 rounded-none">
              <div className="flex gap-10  flex-1">
                <CgFileDocument className="text-[30px] " />
                <h1 className="sm:text-base sm:font-light font-bold text-[22px]">
                  Daily Summary
                </h1>
              </div>
              <SlArrowRight className="text-[20px]" />
            </div>
            <div className="sidebar-link flex items-center justify-between cursor-pointer w-5/6 p-3 sm:rounded sm:border-b-0 border-b-[1px] border-gray-300 rounded-none sm:bg-inactive">
              <div className="flex gap-10  flex-1">
                <BsBank className="text-[30px]" />
                <h1 className="sm:text-base sm:font-light font-bold text-[22px]">
                  Bank Details
                </h1>
              </div>
              <SlArrowRight className="text-[20px]" />
            </div>
          </div>
        </div>
        <div className="update-form-section sm:w-3/5 sm:ml-10 flex flex-col gap-7 mt-10  ml-5  mr-5">
          <div className="update-title">
            <h1 className="text-2xl font-poppins">Update Bank Details</h1>
          </div>
          <div className="update-subtitle">
            <h1 className="text-sm">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </h1>
          </div>
          <div className="update-form-box border-2 rounded p-10">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">ACCOUNT HOLDER NAME</label>
                <div className="flex flex-col ">
                  <Input
                    placeholder="Account Holder Name"
                    type="name"
                    id="holderName"
                    name="holderName"
                    autocomplete="off"
                    value={values.holderName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.holderName && touched.holderName ? (
                    <p className="text-red-600">{errors.holderName}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">ACCOUNT NUMBER</label>
                <div className="flex flex-col">
                  <Input
                    placeholder="Account Number"
                    type="accNo"
                    id="accNo"
                    name="accNo"
                    autocomplete="off"
                    value={values.accNo}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.accNo && touched.accNo ? (
                    <p className="text-red-600">{errors.accNo}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">IFSC CODE</label>
                <div className="flex flex-col">
                  <Input
                    placeholder="IFSC Code"
                    type="ifsc-code"
                    id="ifsc"
                    name="ifsc"
                    autocomplete="off"
                    value={values.ifsc}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.ifsc && touched.ifsc ? (
                    <p className="text-red-600">{errors.ifsc}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">BANK NAME</label>
                <div className="flex flex-col">
                  <Input
                    placeholder="Bank Name"
                    type="bank-name"
                    id="bankName"
                    name="bankName"
                    autocomplete="off"
                    value={values.bankName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.bankName && touched.bankName ? (
                    <p className="text-red-600">{errors.bankName}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">BANK CITY</label>
                <div className="flex flex-col">
                  <Input
                    placeholder="Bank City"
                    type="city"
                    id="bankCity"
                    name="bankCity"
                    autocomplete="off"
                    value={values.bankCity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.bankCity && touched.bankCity ? (
                    <p className="text-red-600">{errors.bankCity}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">BRANCH NAME</label>
                <div className="flex flex-col">
                  <Input
                    placeholder="Branch Name"
                    type="branchName"
                    id="branchName"
                    name="branchName"
                    autocomplete="off"
                    value={values.branchName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.branchName && touched.branchName ? (
                    <p className="text-red-600">{errors.branchName}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4">
                <label className="text-sm font-bold">
                  RELATION WITH ACCOUNT HOLDER
                </label>
                <div className="flex flex-col">
                  <Input
                    placeholder="Relation With Account Holder"
                    type="relation"
                    id="relation"
                    name="relation"
                    autocomplete="off"
                    value={values.relation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    filled={filled}
                  />
                  {errors.relation && touched.relation ? (
                    <p className="text-red-600">{errors.relation}</p>
                  ) : null}
                </div>
              </div>
              <div className="flex justify-between xsm:items-center mb-6 xsm:flex-row flex-col gap-4 ">
                <label className="text-sm font-bold">CONSENT</label>
                <div className="flex flex-col">
                  <div
                    className={` ${
                      filled ? `bg-bgGreen` : `bg-white`
                    } flex border-2 rounded w-[384px] items-start gap-2 pb-10  pt-3 pl-3`}
                  >
                    {filled ? (
                      <></>
                    ) : (
                      <input
                        className="w-[60px] h-[60px] "
                        type="checkbox"
                        id="consent"
                        name="consent"
                        autoComplete="off"
                        value={values.consent}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></input>
                    )}

                    <div className="flex flex-col gap-2">
                      <h1 className="text-sm font-light">
                        I confirm that the information given in this form is
                        true, complete and accurate. I understand that in case
                        of incorrect details, Exambazaar will not be responsible
                        for any loss of pay.
                      </h1>
                      {filled ? (
                        <h1 className="font-bold font-sm">
                          FILLED ON {formattedDate}
                        </h1>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  {errors.consent && touched.consent ? (
                    <p className="text-red-600">{errors.consent}</p>
                  ) : null}
                </div>
              </div>

              <div className="flex  justify-end">
                {filled ? <></> : <Button btnText="Save" type="submit" />}
              </div>
            </form>
          </div>
          <div className="update-footer border-b-2 pb-6">
            <h1 className="text-sm text-center">
              THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY
              OF THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER
              IMMEDIATELY! ALSO EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Update;
