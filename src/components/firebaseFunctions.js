import { firestore } from "../Firebase";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  serverTimestamp,
  collection,
  getDoc,
} from "firebase/firestore";

// 회원가입
export async function signUp(email, password, userInfo) {
  try {
    const userRef = doc(firestore, "users", email);
    await setDoc(userRef, {
      email: email,
      password: password,
      ...userInfo,
    });
    return { email, ...userInfo };
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}

// 로그인
export async function signIn(email, password) {
  try {
    const userRef = doc(firestore, "users", email);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists() && userDoc.data().password === password) {
      return userDoc.data();
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

// 장바구니 아이템 추가
export async function addToCart(userId, item) {
  const cartRef = doc(firestore, "carts", userId);
  try {
    await updateDoc(cartRef, {
      cartItems: arrayUnion(item),
    });
    console.log("Item added to cart");
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

// 장바구니 아이템 제거
export async function removeFromCart(userId, item) {
  const cartRef = doc(firestore, "carts", userId);
  try {
    await updateDoc(cartRef, {
      cartItems: arrayRemove(item),
    });
    console.log("Item removed from cart");
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
}

// 주문 생성
export async function createOrder(userId, cartItems, totalPrice) {
  const orderRef = doc(collection(firestore, "orders"));
  try {
    await setDoc(orderRef, {
      userId: userId,
      orderItems: cartItems,
      status: "ordered",
      totalPrice: totalPrice,
      createdAt: serverTimestamp(),
    });
    await updateDoc(doc(firestore, "carts", userId), {
      cartItems: [],
    });
    console.log("Order created");
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}
