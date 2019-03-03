import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Something went wrong.</h1>
          <p>
            We're terribyl sorry for the inconvenient. Please try to reload the
            app. If the error persist, please contact us!
          </p>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
