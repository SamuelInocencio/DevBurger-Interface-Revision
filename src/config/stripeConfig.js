import { loadStripe } from '@stripe/stripe-js';

// Chave Pública Conta Real
// const stripePromise = loadStripe('pk_live_51Rtv3j1iChlenDfDbincmYDkZeWpjrptnSYsJcFJbE0hxJKkF8N0EfU7FzYC8yVd2nEDRaSI72WulmcDtcUtNzSy00leApUurp');

// Chave Pública Conta de Teste
const stripePromise = loadStripe('pk_test_51Rtv3j1iChlenDfDdi2JVbMcArUPhef5Xl03ndeth90Z7XsG2YbZnTTuTrEgb8ErRWS0QAV9K0PA2Ldg39PnGi4i005rNCbwLz');

export default stripePromise;
