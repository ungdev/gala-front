interface PropTypes {
  height?: number;
  duration?: number;
  easing?: string;
  children?: (onLoad: () => void) => void;
  render?: (onLoad: () => void) => void;
}

declare module 'react-lazyload-fadein' {
  export default class FadeIn extends React.Component<PropTypes> {}
}

declare namespace globalThis {
  interface Window {
    readonly OneSignal: any[];
  }
}
