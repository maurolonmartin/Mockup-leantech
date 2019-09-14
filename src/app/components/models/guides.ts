export class Guides{

    constructor(
        public date: string,
        public origin: string,
        public zipCodeOrigin: string,
        public destination: string,
        public zipCodeDestination: string,
        public value: number,
        public guideNumber: string,
        public status: string
    ){ }
}