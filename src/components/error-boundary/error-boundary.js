import { Component } from "react";
import ErrorMessage from "../error-message/error-message";

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  // static getDerivedStateFromError(err) {
  //   return { error: true };
  // }

  componentDidCatch(err, info) {
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return <ErrorMessage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
