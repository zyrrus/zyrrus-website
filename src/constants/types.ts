export interface ProjectDetails {
    title: string;
    stack: string;
    date: string;
    links: {
        github?: string;
        live?: string;
        figma?: string;
    };
    // description: string[];
    image?: string;
}
