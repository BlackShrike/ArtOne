import React, { useState } from "react";
import styles from "../css/FAQ.module.css";

function FAQ() {
  const [activeSection, setActiveSection] = useState("shipping");

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqSidebar}>
        <ul>
          <li
            className={activeSection === "shipping" ? styles.active : ""}
            onClick={() => setActiveSection("shipping")}
          >
            배송/교환
          </li>
          <li
            className={
              activeSection === "customer-service" ? styles.active : ""
            }
            onClick={() => setActiveSection("customer-service")}
          >
            고객 서비스
          </li>
          <li
            className={activeSection === "faq" ? styles.active : ""}
            onClick={() => setActiveSection("faq")}
          >
            자주 묻는 질문
          </li>
          <li
            className={activeSection === "contact" ? styles.active : ""}
            onClick={() => setActiveSection("contact")}
          >
            연락망
          </li>
        </ul>
      </div>

      <div className={styles.faqContent}>
        {activeSection === "shipping" && (
          <div>
            <h1 className={styles.shippingHeader}>배송/교환</h1>
            <div className={styles.shippingContent}>
              <h2>배송 지역</h2>
              <p>전국</p>
              <h2>제품 관련</h2>
              <p>
                제품 수령 후 해당 제품의 손상을 발견했다면, 아래 연락처로 문의
                부탁드립니다.
              </p>
              <h2>고객센터</h2>
              <p>
                운영시간: 10:00-17:00 (주말, 공휴일 휴무)
                <br />
                연락처 (Tel): 02-332-9934
                <br />
                카카오 채널 (Kakao Channel) : ARTONE
              </p>
              <h2>교환/환불 안내</h2>
              <p>
                구입하신 제품에 문제가 있으시다면 문의 후 교환 또는 환불 받으실
                수 있습니다.
              </p>
              <h2>고객센터 (Customer Service)</h2>
              <p>
                연락처: 010-3022-2689
                <br />
                Open AM 10:00 - PM 05:30
                <br />
                Lunch PM 12:30 - PM 13:30
                <br />
                Sat, Sun. Holiday OFF
              </p>
              <h2>취소/교환이 불가능한 경우</h2>
              <ul className={styles.explainList}>
                <li>
                  상품 수령 시 반드시 상품의 하자 여부를 확인 부탁드립니다. 상품
                  하자 여부의 확인이 없이 반품 된 제품은 고객님의 책임 사유가 될
                  수 있습니다.
                </li>
                <li>
                  전자제품의 특성상 소비자보호법에 관련 법률 제17조 (청약철회
                  등) 에 의거 상품의 반품이 불가능한 경우 교환 및 환불이 되지
                  않습니다.
                </li>
                <li>
                  고객님의 부주의로 인한 상품 손상 등이 있을 시 또는 제품 사용
                  후, 단순 변심에 의한 교환 및 환불이 불가능 합니다.
                </li>
                <li>
                  포장을 개봉하였거나 포장이 훼손되어 상품 가치가 현저히 상실된
                  경우
                </li>
                <li>
                  모든 화장품, 향수, 속옷류(타이즈, 비닐포장, 정장바지/의류
                  상의) 등은 특성상 개봉한 경우
                </li>
                <li>
                  사전의 검품과정에 의해 재판매가 불가능한 제품으로 상품 품질
                  가치가 현저히 감소한 경우
                </li>
                <li>
                  구매자의 사용에 의하여 재판매가 불가능한 경우 (ex. 구매자의
                  체형 변화 등으로 인하여 치수가 불가능한 경우 제외)
                </li>
                <li>구매 이후 세탁 및 수선으로 인하여 상품이 훼손된 경우</li>
              </ul>
              <h2>교환 신청</h2>
              <p>1대 1 문의를 통한 교환신청</p>
            </div>
          </div>
        )}
        {activeSection === "customer-service" && (
          <div className={styles.customerServiceContent}>
            <h1>고객 서비스</h1>
            <h3>상담 서비스 안내</h3>
            <b>
              ARTONE는 편안한 경험을 제공하기 위해 모든 노력을 기울이고
              있습니다.
              <br /> 아래 방법을 통해 제품에 대한 안내 및 주문, 배송상황 등
              궁금하신 모든 사항에 대해 답변을 드립니다.
            </b>
            <h2>고객센터</h2>
            <p>
              CS 주소: 연락처: 010-3022-2689
              <br />
              Open AM 10:00 - PM 05:30
              <br />
              Lunch PM 12:30 - PM 13:30
              <br />
              Sat, Sun. Holiday OFF
            </p>
          </div>
        )}
        {activeSection === "faq" && (
          <div className={styles.faqList}>
            <h3>사이즈 및 제품소개</h3>
            <ul>
              <li>
                <strong>Q 제품의 상세 정보는 어디서 확인할 수 있나요?</strong>
                <span>
                  ㄴ각 제품의 상세 페이지에서 소재 정보등을 확인할 수 있습니다.
                </span>
              </li>
              <li>
                <strong>Q 사이즈 선택 시 참고할 사항이 있나요?</strong>
                <span>
                  ㄴ제품마다 다양한 사이즈가 있으므로, 상세한 사이즈 차트를
                  확인하여 가늠하고 주문해주세요.
                </span>
              </li>
            </ul>
            <h3>주문 및 결제</h3>
            <ul>
              <li>
                <strong>Q 주문한 작품을 어떻게 확인할 수 있나요</strong>
                <span>
                  ㄴ주문 재역은 마이페이지에서 확인 가능합니다. 주문 후에
                  이메일로도 확인 메시지가 발송됩니다.
                </span>
              </li>
              <li>
                <strong>Q 어떤 결제 수단을 사용할 수 있나요</strong>
                <span>
                  ㄴ신용카드 및 네이퍼 페이, 카카오 페이 등을 통한 결제가
                  가능합니다. 안전하고 신속한 결제를 지원합니다.
                </span>
              </li>
              <li>
                <strong>Q 주문 취소는 어떻게 하나요?</strong>
                <span>
                  ㄴ주문 취소는 발송 전까지 가능하며, 마이페이지에서 주문 상태를
                  확인하고 취소할 수 있습니다.
                </span>
              </li>
              <li>
                <strong>Q 어떤 결제 수단을 사용할 수 있나요</strong>
                <span>
                  ㄴ신용카드 및 네이버 페이, 카카오 페이 등을 통한 결제가
                  가능합니다. 안전하고 신속한 결제를 지원합니다.
                </span>
              </li>
              <li>
                <strong>배송료는 어떻게 책정되나요</strong>
                <span>
                  ㄴ배송료는 구매 지역 및 작품 크기에 따라 다르며, 주문 시에
                  자동으로 계산됩니다.
                </span>
              </li>
            </ul>
            <h3>작품 및 예술가</h3>
            <ul>
              <li>
                <strong>Q 작품은 어떻게 포장되어 배송되나요</strong>
                <span>
                  ㄴ작품은 신중하게 포장되어 안전하게 보내집니다. 고품질의
                  포장재를 사용하여 손상을 최소화합니다
                </span>
              </li>
              <li>
                <strong>
                  Q 사용된 소재 등의 정보는 어디에서 확인할 수 있나요
                </strong>
                <span>
                  ㄴ각 작품의 상세 페이지에서 사용된 소재와 사용된 기술에 대한
                  정보를 확인할 수 있습니다.
                </span>
              </li>
            </ul>
            <h3>주문 취소, 환불, 교환</h3>
            <ul>
              <li>
                <strong>Q 주문한 작품에 대한 환불 정책이 어떻게 되나요</strong>
                <span>
                  ㄴ예술작품의 특성상, 단순 변심으로 인한 주문한 작품의 환불은
                  어렵습니다. 자세한 내용은 환불 정책을 참조하세요.
                </span>
              </li>
              <li>
                <strong>
                  Q: 다음의 경우에는 교환/반품을 신청할 수 없습니다.
                </strong>
                <span>
                  ㄴ서포터의 책임있는 사유로 상품등이 멸실 또는 훼손된
                  경우(다만, 상품 등의 내용을 확인하기 위하여 포장 등을 훼손한
                  경우는 제외함)
                </span>
                <span>
                  ㄴ서포터의 사용 또는 일부 소비로 인하여 상품등의 가치가 현저히
                  감소한 경우
                </span>
              </li>
            </ul>
            <h3>웹사이트 이용 및 회원가입</h3>
            <ul>
              <li>
                <strong>Q 회원가입이 필요한 이유는 무엇인가요</strong>
                <span>
                  ㄴ회원가입을 통해 주문 추적, 개인화된 추천, 할인 혜택 제공 등
                  다양한 서비스를 이용할 수 있습니다.
                </span>
              </li>
              <li>
                <strong>Q 회원정보는 어떻게 수정할 수 있나요</strong>
                <span>
                  ㄴ마이페이지에서 회원정보를 쉽게 수정하고 업데이트할 수
                  있습니다.
                </span>
              </li>
            </ul>
            <h3>회사 정보 및 정책</h3>
            <ul>
              <li>
                <strong>Q 회사의 배송 범위는 어디까지인가요</strong>
                <span>
                  ㄴ현재는 국내 배송만 가능하며, 향후 국제 배송에 대한 계획이
                  있습니다.
                </span>
              </li>
              <li>
                <strong>Q 작품의 가격은 어떻게 책정되나요</strong>
                <span>
                  ㄴ작품의 가격은 예술가의 평판, 작품의 크기, 사용된 소재 등을
                  고려하여 책정됩니다
                </span>
              </li>
            </ul>
          </div>
        )}
        {activeSection === "contact" && (
          <div className={styles.contactSection}>
            <h1 className={styles.contactHeader}>연락망</h1>
            <div className={styles.contactWrapper}>
              <div className={styles.contactLeftColumn}>
                <h2>본사</h2>
              </div>
              <div className={styles.contactRightColumn}>
                <p>
                  본사 주소 : 인천광역시 연수구 인천타워대로 323, A동 31층
                  더블유에이 35호
                  <br />
                  연락처: 010-3022-2689
                </p>
                <p>
                  비즈니스 문의
                  <br />
                  이메일 : contemporaryk@naver.com
                </p>
                <p>
                  채용 관련 문의
                  <br />
                  이메일 : contemporaryk@naver.com
                </p>
              </div>
            </div>
            <div className={styles.contactWrapper}>
              <div className={styles.contactLeftColumn}>
                <h2>고객센터</h2>
              </div>
              <div className={styles.contactRightColumn}>
                <p>
                  CS 주소 : 서울특별시 동대문구 이문로3길 22-5 201호
                  <br />
                  연락처 : 010-3022-2689
                </p>
                <p>
                  Open AM 10:00 - PM 05:30
                  <br />
                  Lunch PM 12:30 - PM 13:30
                  <br />
                  Sat, Sun. Holiday OFF
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FAQ;
