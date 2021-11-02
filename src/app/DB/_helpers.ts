export function assetsPathBuilder(rootPath: string): (path: string) => string {
  return (relativeToRootPath: string) => {
    return `${rootPath}/${relativeToRootPath}`;
  };
}

export function renderLink(href: string, content: string): string {
  return `<a class="link" href="${href}" target="_blank" ><span><b>${content}</b></span></a>`;
}
