export function useMDXComponents(components: any) {
  return {
    h1: (props: any) => <h1 {...props} className="text-xl font-bold" />,
    h2: (props: any) => <h2 {...props} className="text-lg font-semibold" />,
    p: (props: any) => <p {...props} className="text-base" />,
    a: (props: any) => <a {...props} className="text-blue-500 underline" />,
  };
}
