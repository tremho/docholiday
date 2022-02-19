
import {processFileList} from "../index"

let generator = processFileList([__filename])
let gen = generator.next()
console.log(gen.value)
