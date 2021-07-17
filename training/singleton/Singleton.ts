class Singleton {
    private static instance: Singleton;
    private constructor() {
        //init

    }

    static geInstance() {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton;
        }

        return Singleton.instance;

    }
}

export default Singleton;