import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

const schema = {
    type: "object",
    properties: {
        test: {
            name: 'string',
        }
    }
}


export default function loader(source) {
    const options  = getOptions(this);
    source = source.replace(/\[name\]/g, options.name);
    validateOptions(schema, options, 'Example loader');

    return `export default ${JSON.stringify(source)}`;
}