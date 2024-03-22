// export class RuleValidationPipe<T extends object>
//   implements PipeTransform<T> {
//   constructor(
//     private callback: (...data: unknown[]) => boolean,
//     private logError: boolean = false,
//     private route?: string,
//     private readonly handler = new ValidationHandler()
//   ) {
//   }
//
//   transform(value: object | string, metadata: ArgumentMetadata) {
//
//   }
// }