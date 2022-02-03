const Loading = () => {
    return (
        <div class="border-2 border-gray-800 shadow rounded-md p-4 max-w-md md:max-w-lg w-full mx-auto mt-7">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-800 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                    <div class="space-y-2">
                        <div class="h-4 bg-gray-800 rounded"></div>
                        <div class="h-4 bg-gray-800 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
