import Link from "next/link";
import React from "react";
import { LuClock9 } from "react-icons/lu";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const refundpolicy = () => {
  return (
    <div className="bg-[#191919] text-[#FFFFFFCF] min-h-screen px-[20px] sm:px-[60px] lg:px-[100px] 3xl:px-[150px] py-[20px] sm:py-[60px] lg:py-[100px] 3xl:py-[150px] mt-[30px]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[40px] font-bold mb-6 relative after:content-[''] after:block after:w-full after:h-[0.5px] after:bg-[#FFFFFFCF] after:mt-4">
          Refund & Cancellation Policy
          <div className="flex flex-row mt-3">
            <div className=" font-normal mr-12">
              <p className="flex items-center text-[12px] mb-2 opacity-50">
                <LuClock9 className="mr-1" /> Last edited time
              </p>

              <p className="flex items-center text-[12px] opacity-50">
                <MdOutlineArrowDropDownCircle className="mr-1" /> Status
              </p>
            </div>
            <div className="text-[12px] font-normal">
              <p className="mb-2 ">October 7, 2024 4:23 PM</p>

              <p className="opacity-50">Empty</p>
            </div>
          </div>
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-sm">
            Welcome to Quiro, a product by Witsome Tech Private Limited. We
            value the trust of our customers and are committed to delivering
            top-tier service and support. This Refund and Cancellation Policy
            outlines the guidelines and procedures for handling refund and
            cancellation requests. By using our services, you agree to the terms
            outlined in this policy.
          </p>
          <hr className="opacity-50 mt-2" />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Refund Policy</h2>

          <p className="text-sm">
            At Quiro, we aim to meet and exceed your expectations with our
            services. However, we understand that there may be instances where a
            refund is necessary. The following conditions apply for refund
            requests:
          </p>

          <ol className="text-sm mt-1 list-decimal pl-5">
            <li className="mt-2">
              <strong>Eligibility for Refund:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Refunds will only be processed if there is a{" "}
                  <strong>significant issue</strong> with the service that
                  cannot be resolved.
                </li>
                <li>
                  Services rendered in full, or digital goods that have been
                  accessed, are <strong>non-refundable</strong> unless they are
                  proven to be defective or misrepresented.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Manual Processing of Refunds:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  All refunds are manually processed and handled through{" "}
                  <strong>offline payment methods</strong>, such as bank
                  transfers or other agreed-upon offline methods.
                </li>
                <li>
                  We do <strong>not</strong> process refunds through online
                  gateways.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Conditions for Refund Approval:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Refund requests will be considered based on the{" "}
                  <strong>nature of the complaint</strong> and a valid{" "}
                  <strong>proof of purchase</strong>.
                </li>
                <li>
                  The final decision on refund approval rests with the{" "}
                  <strong>property’s management</strong> after thoroughly
                  reviewing the issue.
                </li>
                <li>
                  If the service was not delivered or was misrepresented, a{" "}
                  <strong>full refund</strong> may be issued.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Refund Process Timeline:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  <strong>Step 1:</strong> <strong>Initiate Request:</strong>{" "}
                  Contact the property’s staff in person or call us at{" "}
                  <strong>+91 9897510877</strong> to initiate your refund
                  request. Please provide your original transaction receipt and
                  a detailed explanation of the issue.
                </li>
                <li>
                  <strong>Step 2:</strong>{" "}
                  <strong>Evaluation (0-5 Business Days):</strong> Once your
                  request is received, our team will verify the transaction
                  details. You may be asked to provide additional documentation.
                </li>
                <li>
                  <strong>Step 3:</strong>{" "}
                  <strong>Decision (5-7 Business Days):</strong> The property’s
                  management will review your request, and you will be informed
                  of the final decision within{" "}
                  <strong>5-7 business days</strong>.
                </li>
                <li>
                  <strong>Step 4:</strong>{" "}
                  <strong>Processing the Refund (7-14 Business Days):</strong>{" "}
                  Approved refunds will be processed through offline payment
                  methods. The refund transaction may take an additional{" "}
                  <strong>7-14 business days</strong> depending on the
                  complexity and payment method.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Non-Refundable Services:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Certain services, including <strong>subscriptions</strong>,{" "}
                  <strong>service add-ons</strong>, and{" "}
                  <strong>customized solutions</strong>, are{" "}
                  <strong>non-refundable</strong>. These exceptions will be
                  communicated at the time of purchase.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Disputes:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Quiro is committed to resolving disputes in good faith.
                  Customers are encouraged to provide all relevant information
                  to support their refund claims, and our team will work towards
                  an amicable resolution.
                </li>
              </ul>
            </li>
          </ol>
          <hr className="opacity-50 mt-2" />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>

          <p className="text-sm">
            We understand that sometimes plans change, and a cancellation may be
            necessary. The following conditions apply to cancellations:
          </p>

          <ol className="text-sm mt-1 list-decimal pl-5">
            <li className="mt-2">
              <strong>Cancellation Requests:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Customers can initiate a cancellation request by contacting
                  the <strong>admin</strong> or management of the property
                  directly, either in person, via phone, or through the support
                  contact.
                </li>
                <li>
                  Call us at <strong>+91 9897510877</strong> or visit the
                  property’s reception to request a cancellation. Please have
                  your booking details or transaction receipt ready.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Cancellation Timeline:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  <strong>Step 1:</strong>{" "}
                  <strong>Submit Cancellation Request:</strong> Contact the
                  admin or property management to initiate a cancellation. You
                  must provide all booking and payment details at the time of
                  the request.
                </li>
                <li>
                  <strong>Step 2:</strong>{" "}
                  <strong>Evaluation and Approval (0-3 Business Days):</strong>{" "}
                  The property’s management will review your cancellation
                  request within <strong>3 business days</strong> and decide
                  whether the cancellation can be processed.
                </li>
                <li>
                  <strong>Step 3:</strong>{" "}
                  <strong>
                    Refund Processing (if eligible, 3-7 Business Days):
                  </strong>{" "}
                  If your cancellation is approved and qualifies for a refund,
                  the refund process will follow the standard offline refund
                  procedure and take <strong>3-7 business days</strong>.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Admin's Right to Cancel:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  The <strong>admin reserves the right</strong> to cancel any
                  service or order if deemed necessary due to operational or
                  other reasons. In such cases, the customer will be informed
                  immediately, and if applicable, a <strong>full refund</strong>{" "}
                  will be provided within <strong>7-14 business days</strong>.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Cancellation Fees:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Depending on the service and the time of cancellation, certain{" "}
                  <strong>cancellation fees</strong> may apply. These fees will
                  be communicated to you at the time of your cancellation
                  request.
                </li>
              </ul>
            </li>

            <li className="mt-2">
              <strong>Non-Cancellable Services:</strong>
              <ul className="ml-4 list-disc">
                <li>
                  Certain services, especially{" "}
                  <strong>pre-paid bookings</strong>,{" "}
                  <strong>customized services</strong>, or{" "}
                  <strong>special offers</strong>, may be non-cancellable. This
                  information will be provided during the purchase process.
                </li>
              </ul>
            </li>
          </ol>
          <hr className="opacity-50 mt-2" />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Changes to the Refund and Cancellation Policy
          </h2>
          <p className="text-sm">
            Quiro reserves the right to modify this Refund and Cancellation
            Policy at any time. Any changes will be posted on our website at{" "}
            <a
              href="https://www.quiro.in/refund-policy"
              className="text-blue-500"
            >
              quiro.in
            </a>
            , and it is the customer’s responsibility to review the policy
            periodically for updates.
          </p>
          <hr className="opacity-50 mt-2" />
        </section>

        

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            FAQ: Frequently Asked Questions
          </h2>

          <div className="text-sm mt-1">
            <h3 className="font-semibold">
              1. How long does it take to process a refund?
            </h3>
            <p>
              Refunds typically take <strong>7-14 business days</strong> to be
              processed, though the exact timeline may vary depending on the
              complexity of the transaction.
            </p>

            <h3 className="font-semibold mt-2">
              2. Can I cancel partially used services?
            </h3>
            <p>
              Cancellation of partially used services will be reviewed on a{" "}
              <strong>case-by-case basis</strong>. If there is a valid reason,
              please contact our support team.
            </p>

            <h3 className="font-semibold mt-2">
              3. What information do I need to provide for a refund or
              cancellation request?
            </h3>
            <p>
              To expedite the process, you must provide your{" "}
              <strong>transaction receipt</strong>, a detailed explanation of
              the issue, and any other supporting documents.
            </p>

            <h3 className="font-semibold mt-2">
              4. Are there any fees associated with cancellations or refunds?
            </h3>
            <p>
              Quiro does not charge additional fees for processing refunds, but{" "}
              <strong>cancellation fees</strong> may apply based on the timing
              and type of service. Your financial institution may also charge
              transaction fees beyond our control.
            </p>

            <h3 className="font-semibold mt-2">
              5. How will I be informed of the refund or cancellation decision?
            </h3>
            <p>
              Our Customer Support team will notify you via{" "}
              <strong>email</strong> or phone with updates regarding your refund
              or cancellation request, including the final decision.
            </p>

            <h3 className="font-semibold mt-2">
              6. Can I change the refund or cancellation method once the process
              has started?
            </h3>
            <p>
              Once the refund or cancellation process has begun, changing the
              method is generally <strong>not possible</strong>. Please ensure
              you confirm the preferred method during your initial request.
            </p>

            <h3 className="font-semibold mt-2">
              7. Can I get a refund if I change my mind after purchasing a
              service?
            </h3>
            <p>
              Refunds for a <strong>change of mind</strong> are generally not
              granted. We recommend you carefully review our services before
              making a purchase.
            </p>

            <h3 className="font-semibold mt-2">
              8. What happens if a service is delivered as described but does
              not meet my expectations?
            </h3>
            <p>
              If the service was delivered as described but did not meet your
              expectations, please contact our support team. We value your
              feedback and aim to resolve any concerns.
            </p>
          </div>
          <hr className="opacity-50 mt-2" />
        </section>

        

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Legal Disclaimer</h2>
          <p className="text-sm">
            This Refund Policy is governed by the laws of India. By using
            Quiro's services, you agree to this policy and the terms and
            conditions stated herein. This policy does not affect your statutory
            rights.
          </p>
          <p className="text-sm mt-1">
            For a detailed understanding of your rights and obligations, please
            refer to our{" "}
            <Link href="/termsofservices">
              <p className="underline inline">Terms of Service</p>
            </Link>{" "}
            and{" "}
            <Link href="https://www.quiro.in/privacy">
              <p className="underline inline">Privacy Policy</p>
            </Link>
            .
          </p>
          <hr className="opacity-50 mt-2" />
        </section>

        

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">
            Your questions and concerns about issues matters to us. If you have
            any inquiries or need further clarification regarding this Refund
            Policy or our payment practices, please do not hesitate to contact
            us at{" "}
            <a href="mailto:info@witsome.in" className="underline inline">
              info@witsome.in
            </a>
            . Our dedicated team is here to address your concerns and provide
            assistance.
          </p>
          <p className="text-sm mt-1">
            We value your trust in choosing Quiro and are committed to ensuring
            your privacy is protected while delivering an outstanding full-stack
            point-of-sale solution.
          </p>
          <p className="text-sm mt-4">
            <strong>Witsome Tech Private Limited</strong>
          </p>
          <p className="text-sm mt-1">
            1330, 4th Floor, Rail Vihar, Sector 57, Gurgaon, Sadar Bazar,
            Gurgaon- 122001, Haryana
          </p>
          <p className="text-sm mt-1">
            <a href="mailto:info@witsome.in" className="underline inline">
              info@witsome.in
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default refundpolicy;
