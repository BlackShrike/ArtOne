import { auth, firestore } from "./Firebase";

// 회원가입
export async function signUp(email, password, userInfo) {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    await firestore
      .collection("users")
      .doc(user.uid)
      .set({
        email: email,
        ...userInfo,
      });
    return user;
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
}

// 로그인
export async function signIn(email, password) {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
}

// 장바구니 아이템 추가
export async function addToCart(userId, item) {
  const cartRef = firestore.collection("carts").doc(userId);
  try {
    await cartRef.update({
      cartItems: firebase.firestore.FieldValue.arrayUnion(item),
    });
    console.log("Item added to cart");
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
}

// 장바구니 아이템 제거
export async function removeFromCart(userId, item) {
  const cartRef = firestore.collection("carts").doc(userId);
  try {
    await cartRef.update({
      cartItems: firebase.firestore.FieldValue.arrayRemove(item),
    });
    console.log("Item removed from cart");
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
}

// 주문 생성
export async function createOrder(userId, cartItems, totalPrice) {
  const orderRef = firestore.collection("orders").doc();
  try {
    await orderRef.set({
      userId: userId,
      orderItems: cartItems,
      status: "ordered",
      totalPrice: totalPrice,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    await firestore.collection("carts").doc(userId).update({
      cartItems: [],
    });
    console.log("Order created");
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}
