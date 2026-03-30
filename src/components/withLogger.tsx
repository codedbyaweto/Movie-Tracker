import { type ReactNode } from "react";

function withLogger(WrappedComponent: () => ReactNode) {
    return function ComponentWithLogger() {
        return <WrappedComponent />;
    };
}

export default withLogger;