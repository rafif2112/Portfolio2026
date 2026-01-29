export default function Layouts({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-[70vh] flex flex-col">
            {children}
        </div>
    )
}