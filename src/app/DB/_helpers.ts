export function assetsPathBuilder(rootPath: string): (path: string) => string {
  return (relativeToRootPath: string) => {
    return `${rootPath}/${relativeToRootPath}`;
  };
}
