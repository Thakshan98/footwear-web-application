import React from 'react'

const ShippingPolicy = () => {
  return (
    <>
      <section className='py-5 bg-stone-200'>
        <div className='container'>
          <div class='grid grid-cols-4 gap-4'>
            <div className='col-span-4 bg-white p-8 font-popins leading-6 tracking-wide'>
            <h4 className='text-center py-2 text-blue-700'>
                Our Shipping Policy
              </h4>
              <p>
                Thank you for choosing Phoenix Footwear Online Shop for your
                shopping needs. This Shipping Policy outlines the details of our
                shipping and delivery procedures. By placing an order with us,
                you agree to the terms stated in this policy. Please read this
                policy carefully before making a purchase.
              </p>
              <h5>Shipping Methods and Rates</h5>
              <p>
                We offer a range of shipping options to accommodate your
                preferences and delivery requirements. The available shipping
                methods and associated rates will be displayed at checkout.
              </p>
              <p>
                Shipping rates are based on factors such as destination,
                shipping method, package weight, and dimensions. Any applicable
                taxes or duties are the responsibility of the customer.
              </p>
              <h5> Order Processing and Handling:</h5>
              <p>
                We strive to process and fulfill orders promptly. Orders are
                typically processed within [X] business days from the date of
                purchase, excluding holidays and weekends. Once your order is
                processed, you will receive an email confirmation containing
                tracking information, allowing you to monitor the progress of
                your shipment.
              </p>
              <h5>Estimated Delivery Times:</h5>
              <p>
                Estimated delivery times are provided at checkout and are based
                on the shipping method selected. Please note that these times
                are estimates and may vary due to factors beyond our control,
                such as carrier delays or customs processing. We make every
                effort to ensure timely deliveries, but we are not liable for
                any delays that occur after the package has been handed over to
                the carrier.
              </p>
              <h5>Tracking and Order Status:</h5>
              <p>
                You can track the status of your order by using the tracking
                number provided in your shipping confirmation email. If you have
                any concerns about the status of your order, please contact our
                customer service team, and we will be happy to assist you.
              </p>
              <h5>Shipping Restrictions:</h5>
              <p>
                We currently offer shipping to [list of countries/regions where
                shipping is available]. If your location is not included in this
                list, we regret that we are unable to fulfill your order at this
                time. Some products may be subject to restrictions or
                regulations in certain regions. It is your responsibility to be
                aware of and comply with any applicable import regulations.
              </p>
              <h5>Address Accuracy:</h5>
              <p>
                Please ensure that the shipping address provided during checkout
                is accurate and complete. We are not responsible for any delays
                or non-delivery resulting from incorrect or incomplete
                addresses.
              </p>
              <h5>Lost or Damaged Packages:</h5>
              <p>
                In the rare event that your package is lost or damaged during
                transit, please contact our customer service team as soon as
                possible. We will work with the carrier to initiate a claim and
                seek a resolution.
              </p>
              <h5>Change or Cancellation of Orders:</h5>
              <p>
                {' '}
                If you need to make changes to or cancel your order after it has
                been placed, please contact us immediately. We will do our best
                to accommodate your request, but changes may not always be
                possible once the order is in the processing stage.
              </p>
              <p>
                By placing an order with Phoenix Footwear Online Shop, you
                acknowledge that you have read, understood, and agreed to the
                terms outlined in this Shipping Policy. If you have any
                questions or require further assistance, please do not hesitate
                to contact our customer service team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ShippingPolicy
