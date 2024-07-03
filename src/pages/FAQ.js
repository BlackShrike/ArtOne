import React, { useState } from "react";
import styles from "../css/FAQ.module.css";
import { useLanguage } from "../components/LanguageContext";
import BackButton from "../components/BackButton";
const translations = {
  KR: {
    sections: {
      shipping: "배송/교환",
      customerService: "고객 서비스",
      faq: "자주 묻는 질문",
      contact: "연락망",
    },
    shippingContent: {
      header: "배송/교환",
      deliveryArea: "배송 지역",
      deliveryAreaContent: "전국",
      productInfo: "제품 관련",
      productInfoContent:
        "제품 수령 후 해당 제품의 손상을 발견했다면, 아래 연락처로 문의 부탁드립니다.",
      customerCenter: "고객센터",
      customerCenterContent:
        "운영시간: 10:00-17:00 (주말, 공휴일 휴무)\n연락처 (Tel): 02-332-9934\n카카오 채널 (Kakao Channel) : ARTONE",
      exchangeRefund: "교환/환불 안내",
      exchangeRefundContent:
        "구입하신 제품에 문제가 있으시다면 문의 후 교환 또는 환불 받으실 수 있습니다.",
      cancelExchangeNotPossible: "취소/교환이 불가능한 경우",
      cancelExchangeNotPossibleContent: [
        "상품 수령 시 반드시 상품의 하자 여부를 확인 부탁드립니다. 상품 하자 여부의 확인이 없이 반품 된 제품은 고객님의 책임 사유가 될 수 있습니다.",
        "전자제품의 특성상 소비자보호법에 관련 법률 제17조 (청약철회 등) 에 의거 상품의 반품이 불가능한 경우 교환 및 환불이 되지 않습니다.",
        "고객님의 부주의로 인한 상품 손상 등이 있을 시 또는 제품 사용 후, 단순 변심에 의한 교환 및 환불이 불가능 합니다.",
        "포장을 개봉하였거나 포장이 훼손되어 상품 가치가 현저히 상실된 경우",
        "모든 화장품, 향수, 속옷류(타이즈, 비닐포장, 정장바지/의류 상의) 등은 특성상 개봉한 경우",
        "사전의 검품과정에 의해 재판매가 불가능한 제품으로 상품 품질 가치가 현저히 감소한 경우",
        "구매자의 사용에 의하여 재판매가 불가능한 경우 (ex. 구매자의 체형 변화 등으로 인하여 치수가 불가능한 경우 제외)",
        "구매 이후 세탁 및 수선으로 인하여 상품이 훼손된 경우",
      ],
      exchangeRequest: "교환 신청",
      exchangeRequestContent: "1대 1 문의를 통한 교환신청",
    },
    customerServiceContent: {
      header: "고객 서비스",
      consultationGuide: "상담 서비스 안내",
      consultationGuideContent:
        "ARTONE는 편안한 경험을 제공하기 위해 모든 노력을 기울이고 있습니다.\n아래 방법을 통해 제품에 대한 안내 및 주문, 배송상황 등 궁금하신 모든 사항에 대해 답변을 드립니다.",
      customerCenter: "고객센터",
      customerCenterContent:
        "CS 주소: 연락처: 010-3022-2689\nOpen AM 10:00 - PM 05:30\nLunch PM 12:30 - PM 13:30\nSat, Sun. Holiday OFF",
    },
    faqContent: {
      sizeProductIntro: "사이즈 및 제품소개",
      sizeProductIntroQnA: [
        {
          question: "Q 제품의 상세 정보는 어디서 확인할 수 있나요?",
          answer: "각 제품의 상세 페이지에서 소재 정보등을 확인할 수 있습니다.",
        },
        {
          question: "Q 사이즈 선택 시 참고할 사항이 있나요?",
          answer:
            "제품마다 다양한 사이즈가 있으므로, 상세한 사이즈 차트를 확인하여 가늠하고 주문해주세요.",
        },
      ],
      orderPayment: "주문 및 결제",
      orderPaymentQnA: [
        {
          question: "Q 주문한 작품을 어떻게 확인할 수 있나요?",
          answer:
            "주문 재역은 마이페이지에서 확인 가능합니다. 주문 후에 이메일로도 확인 메시지가 발송됩니다.",
        },
        {
          question: "Q 어떤 결제 수단을 사용할 수 있나요?",
          answer:
            "신용카드 및 네이퍼 페이, 카카오 페이 등을 통한 결제가 가능합니다. 안전하고 신속한 결제를 지원합니다.",
        },
        {
          question: "Q 주문 취소는 어떻게 하나요?",
          answer:
            "주문 취소는 발송 전까지 가능하며, 마이페이지에서 주문 상태를 확인하고 취소할 수 있습니다.",
        },
      ],
      artworksArtists: "작품 및 예술가",
      artworksArtistsQnA: [
        {
          question: "Q 작품은 어떻게 포장되어 배송되나요?",
          answer:
            "작품은 신중하게 포장되어 안전하게 보내집니다. 고품질의 포장재를 사용하여 손상을 최소화합니다.",
        },
        {
          question: "Q 사용된 소재 등의 정보는 어디에서 확인할 수 있나요?",
          answer:
            "각 작품의 상세 페이지에서 사용된 소재와 사용된 기술에 대한 정보를 확인할 수 있습니다.",
        },
      ],
      cancelRefundExchange: "주문 취소, 환불, 교환",
      cancelRefundExchangeQnA: [
        {
          question: "Q 주문한 작품에 대한 환불 정책이 어떻게 되나요?",
          answer:
            "예술작품의 특성상, 단순 변심으로 인한 주문한 작품의 환불은 어렵습니다. 자세한 내용은 환불 정책을 참조하세요.",
        },
        {
          question: "Q 다음의 경우에는 교환/반품을 신청할 수 없습니다.",
          answer: [
            "서포터의 책임있는 사유로 상품등이 멸실 또는 훼손된 경우(다만, 상품 등의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외함)",
            "서포터의 사용 또는 일부 소비로 인하여 상품등의 가치가 현저히 감소한 경우",
          ],
        },
      ],
      websiteMembership: "웹사이트 이용 및 회원가입",
      websiteMembershipQnA: [
        {
          question: "Q 회원가입이 필요한 이유는 무엇인가요?",
          answer:
            "회원가입을 통해 주문 추적, 개인화된 추천, 할인 혜택 제공 등 다양한 서비스를 이용할 수 있습니다.",
        },
        {
          question: "Q 회원정보는 어떻게 수정할 수 있나요?",
          answer:
            "마이페이지에서 회원정보를 쉽게 수정하고 업데이트할 수 있습니다.",
        },
      ],
      companyPolicy: "회사 정보 및 정책",
      companyPolicyQnA: [
        {
          question: "Q 회사의 배송 범위는 어디까지인가요?",
          answer:
            "현재는 국내 배송만 가능하며, 향후 국제 배송에 대한 계획이 있습니다.",
        },
        {
          question: "Q 작품의 가격은 어떻게 책정되나요?",
          answer:
            "작품의 가격은 예술가의 평판, 작품의 크기, 사용된 소재 등을 고려하여 책정됩니다.",
        },
      ],
    },
    contactContent: {
      header: "연락망",
      headOffice: {
        title: "본사",
        address:
          "본사 주소 : 인천광역시 연수구 인천타워대로 323, A동 31층 더블유에이 35호\n연락처: 010-3022-2689",
        businessInquiry: "비즈니스 문의\n이메일 : contemporaryk@naver.com",
        recruitmentInquiry: "채용 관련 문의\n이메일 : contemporaryk@naver.com",
      },
      customerCenter: {
        title: "고객센터",
        address:
          "CS 주소 : 서울특별시 동대문구 이문로3길 22-5 201호\n연락처 : 010-3022-2689",
        operationTime:
          "Open AM 10:00 - PM 05:30\nLunch PM 12:30 - PM 13:30\nSat, Sun. Holiday OFF",
      },
    },
  },
  EN: {
    sections: {
      shipping: "Shipping/Exchange",
      customerService: "Customer Service",
      faq: "FAQ",
      contact: "Contact",
    },
    shippingContent: {
      header: "Shipping/Exchange",
      deliveryArea: "Delivery Area",
      deliveryAreaContent: "Nationwide",
      productInfo: "Product Information",
      productInfoContent:
        "If you find damage to the product upon receipt, please contact us at the following contact details.",
      customerCenter: "Customer Center",
      customerCenterContent:
        "Operating hours: 10:00-17:00 (closed on weekends and holidays)\nContact (Tel): 02-332-9934\nKakao Channel : ARTONE",
      exchangeRefund: "Exchange/Refund Information",
      exchangeRefundContent:
        "If you have any issues with your purchased product, you can request an exchange or refund after inquiry.",
      cancelExchangeNotPossible:
        "Cases Where Cancellation/Exchange is Not Possible",
      cancelExchangeNotPossibleContent: [
        "Please check for any defects upon receiving the product. Returning the product without confirming the defect can be attributed to the customer's responsibility.",
        "Due to the nature of electronic products, exchanges and refunds are not possible if the product is non-refundable according to the Consumer Protection Law, Article 17 (Withdrawal of Subscription, etc.).",
        "Exchanges and refunds are not possible for damages caused by the customer's negligence or after using the product, or for simple change of mind.",
        "If the packaging has been opened or damaged and the product value has significantly decreased.",
        "All cosmetics, perfumes, underwear (tights, vinyl packaging, suit pants/clothing tops), etc. cannot be exchanged or refunded once opened due to their nature.",
        "Products that cannot be resold due to inspection and significantly reduced product quality value.",
        "Products that cannot be resold due to the customer's use (e.g., if the size is unfit due to changes in the customer's body shape, etc.).",
        "If the product is damaged due to washing or alteration after purchase.",
      ],
      exchangeRequest: "Exchange Request",
      exchangeRequestContent: "Request an exchange through 1:1 inquiry",
    },
    customerServiceContent: {
      header: "Customer Service",
      consultationGuide: "Consultation Guide",
      consultationGuideContent:
        "ARTONE strives to provide a comfortable experience. Below are the methods to inquire about product information, order, delivery status, and any other questions.",
      customerCenter: "Customer Center",
      customerCenterContent:
        "CS Address: Contact: 010-3022-2689\nOpen AM 10:00 - PM 05:30\nLunch PM 12:30 - PM 13:30\nSat, Sun. Holiday OFF",
    },
    faqContent: {
      sizeProductIntro: "Size and Product Introduction",
      sizeProductIntroQnA: [
        {
          question: "Q Where can I find detailed product information?",
          answer:
            "You can check the material information on each product's detail page.",
        },
        {
          question: "Q Are there any considerations when choosing a size?",
          answer:
            "Each product has various sizes, so please refer to the detailed size chart to gauge and order.",
        },
      ],
      orderPayment: "Order and Payment",
      orderPaymentQnA: [
        {
          question: "Q How can I check the artwork I ordered?",
          answer:
            "You can check the order history on My Page. A confirmation message will also be sent via email after the order.",
        },
        {
          question: "Q What payment methods can I use?",
          answer:
            "You can pay with credit cards, Naver Pay, Kakao Pay, etc. We support safe and quick payments.",
        },
        {
          question: "Q How do I cancel an order?",
          answer:
            "Order cancellations are possible before shipment, and you can check and cancel the order status on My Page.",
        },
      ],
      artworksArtists: "Artworks and Artists",
      artworksArtistsQnA: [
        {
          question: "Q How are artworks packaged and delivered?",
          answer:
            "Artworks are carefully packaged and sent safely. High-quality packaging materials are used to minimize damage.",
        },
        {
          question: "Q Where can I find information on the materials used?",
          answer:
            "You can find information on the materials and techniques used on each artwork's detail page.",
        },
      ],
      cancelRefundExchange: "Order Cancellation, Refund, Exchange",
      cancelRefundExchangeQnA: [
        {
          question: "Q What is the refund policy for ordered artworks?",
          answer:
            "Due to the nature of artworks, refunds for simple change of mind are difficult. Please refer to the refund policy for more details.",
        },
        {
          question:
            "Q: In the following cases, you cannot apply for an exchange/return.",
          answer: [
            "If the product is lost or damaged due to the supporter’s responsibility (except when the packaging is damaged to check the contents).",
            "If the product’s value has significantly decreased due to the supporter’s use or partial consumption.",
          ],
        },
      ],
      websiteMembership: "Website Use and Membership",
      websiteMembershipQnA: [
        {
          question: "Q Why do I need to sign up for membership?",
          answer:
            "By signing up, you can track orders, get personalized recommendations, receive discount benefits, and more.",
        },
        {
          question: "Q How can I modify my membership information?",
          answer:
            "You can easily modify and update your membership information on My Page.",
        },
      ],
      companyPolicy: "Company Information and Policy",
      companyPolicyQnA: [
        {
          question: "Q What is the company's delivery range?",
          answer:
            "Currently, domestic delivery is only available, and there are plans for international delivery in the future.",
        },
        {
          question: "Q How is the price of artworks determined?",
          answer:
            "The price of artworks is determined by considering the artist's reputation, the size of the artwork, the materials used, and more.",
        },
      ],
    },
    contactContent: {
      header: "Contact",
      headOffice: {
        title: "Head Office",
        address:
          "Head Office Address: 35th floor, Building A, 323 Incheon Tower-daero, Yeonsu-gu, Incheon\nContact: 010-3022-2689",
        businessInquiry: "Business Inquiry\nEmail : contemporaryk@naver.com",
        recruitmentInquiry:
          "Recruitment Inquiry\nEmail : contemporaryk@naver.com",
      },
      customerCenter: {
        title: "Customer Center",
        address:
          "CS Address: 201, 22-5 Imun-ro 3-gil, Dongdaemun-gu, Seoul\nContact: 010-3022-2689",
        operationTime:
          "Open AM 10:00 - PM 05:30\nLunch PM 12:30 - PM 13:30\nSat, Sun. Holiday OFF",
      },
    },
  },
};

function FAQ() {
  const [activeSection, setActiveSection] = useState("shipping");
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <div className={styles.faqContainer}>
      <BackButton></BackButton>
      <div className={styles.faqSidebar}>
        <ul>
          {Object.keys(t.sections).map((key) => (
            <li
              key={key}
              className={activeSection === key ? styles.active : ""}
              onClick={() => setActiveSection(key)}
            >
              {t.sections[key]}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.faqContent}>
        {activeSection === "shipping" && (
          <div>
            <h1 className={styles.shippingHeader}>
              {t.shippingContent.header}
            </h1>
            <div className={styles.shippingContent}>
              <h2>{t.shippingContent.deliveryArea}</h2>
              <p>{t.shippingContent.deliveryAreaContent}</p>
              <h2>{t.shippingContent.productInfo}</h2>
              <p>{t.shippingContent.productInfoContent}</p>
              <h2>{t.shippingContent.customerCenter}</h2>
              <p>{t.shippingContent.customerCenterContent}</p>
              <h2>{t.shippingContent.exchangeRefund}</h2>
              <p>{t.shippingContent.exchangeRefundContent}</p>
              <h2>{t.shippingContent.cancelExchangeNotPossible}</h2>
              <ul className={styles.explainList}>
                {t.shippingContent.cancelExchangeNotPossibleContent.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
              <h2>{t.shippingContent.exchangeRequest}</h2>
              <p>{t.shippingContent.exchangeRequestContent}</p>
            </div>
          </div>
        )}
        {activeSection === "customerService" && (
          <div className={styles.customerServiceContent}>
            <h1>{t.customerServiceContent.header}</h1>
            <h3>{t.customerServiceContent.consultationGuide}</h3>
            <b>{t.customerServiceContent.consultationGuideContent}</b>
            <h2>{t.customerServiceContent.customerCenter}</h2>
            <p>{t.customerServiceContent.customerCenterContent}</p>
          </div>
        )}
        {activeSection === "faq" && (
          <div className={styles.faqList}>
            <h3>{t.faqContent.sizeProductIntro}</h3>
            <ul>
              {t.faqContent.sizeProductIntroQnA.map((qna, index) => (
                <li key={index}>
                  <strong>{qna.question}</strong>
                  <span>{qna.answer}</span>
                </li>
              ))}
            </ul>
            <h3>{t.faqContent.orderPayment}</h3>
            <ul>
              {t.faqContent.orderPaymentQnA.map((qna, index) => (
                <li key={index}>
                  <strong>{qna.question}</strong>
                  <span>{qna.answer}</span>
                </li>
              ))}
            </ul>
            <h3>{t.faqContent.artworksArtists}</h3>
            <ul>
              {t.faqContent.artworksArtistsQnA.map((qna, index) => (
                <li key={index}>
                  <strong>{qna.question}</strong>
                  <span>{qna.answer}</span>
                </li>
              ))}
            </ul>
            <h3>{t.faqContent.cancelRefundExchange}</h3>
            <ul>
              {t.faqContent.cancelRefundExchangeQnA.map((qna, index) => (
                <li key={index}>
                  <strong>{qna.question}</strong>
                  <span>
                    {Array.isArray(qna.answer)
                      ? qna.answer.join("\n")
                      : qna.answer}
                  </span>
                </li>
              ))}
            </ul>
            <h3>{t.faqContent.websiteMembership}</h3>
            <ul>
              {t.faqContent.websiteMembershipQnA.map((qna, index) => (
                <li key={index}>
                  <strong>{qna.question}</strong>
                  <span>{qna.answer}</span>
                </li>
              ))}
            </ul>
            <h3>{t.faqContent.companyPolicy}</h3>
            <ul>
              {t.faqContent.companyPolicyQnA.map((qna, index) => (
                <li key={index}>
                  <strong>{qna.question}</strong>
                  <span>{qna.answer}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeSection === "contact" && (
          <div className={styles.contactSection}>
            <h1 className={styles.contactHeader}>{t.contactContent.header}</h1>
            <div className={styles.contactWrapper}>
              <div className={styles.contactLeftColumn}>
                <h2>{t.contactContent.headOffice.title}</h2>
              </div>
              <div className={styles.contactRightColumn}>
                <p>{t.contactContent.headOffice.address}</p>
                <p>{t.contactContent.headOffice.businessInquiry}</p>
                <p>{t.contactContent.headOffice.recruitmentInquiry}</p>
              </div>
            </div>
            <div className={styles.contactWrapper}>
              <div className={styles.contactLeftColumn}>
                <h2>{t.contactContent.customerCenter.title}</h2>
              </div>
              <div className={styles.contactRightColumn}>
                <p>{t.contactContent.customerCenter.address}</p>
                <p>{t.contactContent.customerCenter.operationTime}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
