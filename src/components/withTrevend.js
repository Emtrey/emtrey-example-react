import React from "react"
import { Provider } from '@trevend/kit'

function withTrevend(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <Provider apiKey="TREVEND_API_KEY">
        <WrappedComponent {...this.props} />
      </Provider>
    }
  }
}

export default withTrevend;
