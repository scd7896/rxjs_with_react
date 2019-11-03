import React from "react";
import App from "next/app";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../saga";
import reducer from "../reducer";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    
    pageProps.query = ctx.query;
    return { pageProps };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
        </Head>

        
        <Component id="wrraper" {...pageProps} />
        
      </Provider>
    );
  }
}
const configureStore = (initialState, option) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares))
      : compose(
          applyMiddleware(...middlewares),
          !option.isServer &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : f => f
        );
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
};
export default withRedux(configureStore)(MyApp);
