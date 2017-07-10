/**
 * Created by robertominghi on 10/07/17.
 */

export class Image {
  constructor(
    public albumId: number,
    public id: number,
    public title: string,
    public url: string,
    public thumbnailUrl: string
  ) { }
}
