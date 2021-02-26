export const pageAnimation={
    hidden:{
        opacity: 0,
        y: 300
    },
    show:{
        opacity: 1,
        y: 0,
        transition:{
            duration: .5,
            when: 'beforeChildren',
            staggerChildren: .30,
        },
    },
    exit: {
        opacity: 0,
        y: 300,
        transition:{
            duration: .5,
        },
    }
}

export const titleAni = {
    hidden: {
        y: 200,
    },
    show: {
        y: 0,
        transition: {
            duration: .75,
            ease: 'easeOut',
        },
    }
}

export const fade = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: .75,
            ease: 'easeOut',
        }
    }
}

export const photo={
    hidden:{
        scale: 1.5,
        opacity: 0,
    },
    show:{
        scale: 1,
        opacity: 1,
        transition:{
            duration: .75,
            ease: 'easeOut',
            delay: 1.2
        }

    }
}

export const lineAn={
    hidden: {
        width: '0%'
    },
    show: {
        width: '100%',
        transition: {
            duration: 1,
            ease: 'easeOut',
        }
    }
}