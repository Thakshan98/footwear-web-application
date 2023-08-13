import React from 'react'

const TermAndCondition = () => {
  return (
    <>
      <section className='py-5 bg-stone-200'>
        <div className='container'>
          <div class='grid grid-cols-4 gap-4'>
            <div className='col-span-4 bg-white p-8 font-popins leading-6 tracking-wide'>
              <h4 className='text-center py-2 pt-4 text-blue-700'>
                Our Terms and Conditions
              </h4>
              <div className='px-4 py-3'>
                <p>
                  Welcome to Phoenix Footwear Online Shop! These Terms and
                  Conditions outline the rules and regulations for using our
                  website and purchasing products from us. By accessing or using
                  our website and services, you agree to abide by these terms.
                  Please read these terms carefully before proceeding.
                </p>
                <h5>Use of Website:</h5>
                <ol class="list-decimal">
                  <li>
                    You must be at least 18 years old or have the legal capacity
                    to enter into agreements to use our website and make
                    purchases.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of
                    your account and password and for restricting access to your
                    computer to prevent unauthorized access to your account.
                  </li>
                  <li>
                    You agree not to use our website for any illegal or
                    unauthorized purpose, and you may not violate any laws in
                    your jurisdiction while using our services.
                  </li>
                </ol>
                <h5>Product Information and Pricing:</h5>
                <ol class="list-decimal">
                  <li>
                    We strive to provide accurate product descriptions, images,
                    and pricing. However, we do not guarantee that the
                    information on our website is error-free or complete.
                  </li>
                  <li>
                    We reserve the right to modify or discontinue products,
                    prices, and services at any time without notice.
                  </li>
                </ol>
                <h5>Limitation of Liability:</h5>
                <p>
                  In no event shall Phoenix Footwear Online Shop or its
                  affiliates be liable for any indirect, incidental, special,
                  consequential, or punitive damages arising out of or in
                  connection with the use of our website or products.
                </p>
                <h5>Governing Law and Jurisdiction:</h5>
                <p>
                  These Terms and Conditions shall be governed by and construed
                  in accordance with the laws of [Your Jurisdiction]. Any
                  disputes arising out of or related to these terms shall be
                  subject to the exclusive jurisdiction of the courts of [Your
                  Jurisdiction].
                </p>
                <h5>Changes to Terms and Conditions:</h5>
                <p>
                  We may update these Terms and Conditions from time to time.
                  Any changes will be posted on our website, and the effective
                  date will be updated accordingly.
                </p>
                <p>
                  By using our website, you acknowledge that you have read,
                  understood, and agreed to the terms outlined in these Terms
                  and Conditions. If you do not agree with these terms, please
                  do not use our website or make purchases from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TermAndCondition
