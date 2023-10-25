type CardType = {
    icon?: React.ReactNode
    title: string;
    description: string;
    href: string
}


type Service = {
    _id: string;
    title: string;
    description: string;
    category: string;
    serviceFeatures: string[]
}

type Project = {
    id: number;
    imageUrl: string;
    icon?: string;
    title: string;
    description: string;
    tags: string[];
    href: string;
}