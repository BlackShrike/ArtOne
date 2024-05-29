import React, { useState } from "react";
import styles from "../css/FAQ.module.css";

function FAQ() {
  const [activeSection, setActiveSection] = useState("contact");

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
            <h1>배송/교환</h1>
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
              구입하신 제품에 문제가 있으시다면 문의 후 교환 또는 환불 받으실 수
              있습니다.
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
            <ul>
              <li>
                상품 수령 시 반드시 상품의 하자 여부를 확인 부탁드립니다. 상품
                하자 여부의 확인이 없이 반품 된 제품은 고객님의 책임 사유가 될
                수 있습니다.
              </li>
              <li>
                전자제품의 특성상 소비자보호법에 관련 법률 제17조 (청약철회 등)
                에 의거 상품의 반품이 불가능한 경우 교환 및 환불이 되지
                않습니다.
              </li>
              <li>
                고객님의 부주의로 인한 상품 손상 등이 있을 시 또는 제품 사용 후,
                단순 변심에 의한 교환 및 환불이 불가능 합니다.
              </li>
              <li>
                포장을 개봉하였거나 포장이 훼손되어 상품 가치가 현저히 상실된
                경우
              </li>
              <li>
                모든 화장품, 향수, 속옷류(타이즈, 비닐포장, 정장바지/의류 상의)
                등은 특성상 개봉한 경우
              </li>
              <li>
                사전의 검품과정에 의해 재판매가 불가능한 제품으로 상품 품질
                가치가 현저히 감소한 경우
              </li>
              <li>
                구매자의 사용에 의하여 재판매가 불가능한 경우 (ex. 구매자의 체형
                변화 등으로 인하여 치수가 불가능한 경우 제외)
              </li>
              <li>구매 이후 세탁 및 수선으로 인하여 상품이 훼손된 경우</li>
            </ul>
            <h2>교환 신청</h2>
            <p>1대 1 문의를 통한 교환신청</p>
          </div>
        )}
        {activeSection === "customer-service" && (
          <div>
            <h1>고객 서비스</h1>
            <p>상담 서비스 안내</p>
            <p>
              ARTONE는 편안한 경험을 제공하기 위해 모든 노력을 기울이고
              있습니다. 아래 방법을 통해 제품에 대한 안내 및 주문, 배송상황 등
              궁금하신 모든 사항에 대해 답변을 드립니다.
            </p>
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
          <div>
            <h1>자주 묻는 질문</h1>
            <h2>사이즈 및 제품소개</h2>
            <p>제품 사이즈와 관련된 일반적인 질문입니다.</p>
            <h2>주문 및 결제</h2>
            <p>주문과 결제에 대한 일반적인 질문입니다.</p>
            <h2>작품 및 예술가</h2>
            <p>작품 및 예술가와 관련된 질문입니다.</p>
            <h2>주문 취소, 환불, 교환</h2>
            <p>주문 취소, 환불, 교환에 대한 질문입니다.</p>
            <h2>웹사이트 이용 및 회원가입</h2>
            <p>웹사이트 이용 및 회원가입 관련 질문입니다.</p>
            <h2>회사 정보 및 정책</h2>
            <p>회사 정보 및 정책 관련 질문입니다.</p>
          </div>
        )}
        {activeSection === "contact" && (
          <div className={styles.contactSection}>
            <h1>연락망</h1>
            <div className={styles.contactRow}>
              <h2>본사</h2>
              <div className={styles.contactDetails}>
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
            <div className={styles.contactRow}>
              <h2>고객센터</h2>
              <div className={styles.contactDetails}>
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
