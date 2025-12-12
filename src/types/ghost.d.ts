declare module '@tryghost/content-api' {
  export default class GhostContentAPI {
    constructor(config: {
      url: string
      key: string
      version: string
    })

    posts: {
      browse(options?: any): Promise<any[]>
      read(data: any, options?: any): Promise<any>
    }

    pages: {
      browse(options?: any): Promise<any[]>
      read(data: any, options?: any): Promise<any>
    }

    authors: {
      browse(options?: any): Promise<any[]>
      read(data: any, options?: any): Promise<any>
    }

    tags: {
      browse(options?: any): Promise<any[]>
      read(data: any, options?: any): Promise<any>
    }
  }
}
