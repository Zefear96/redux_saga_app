type PaginationProps = {
	pageNumbers: number[];
	currentPage: number;
	handlePageChange: (pageNumber: number) => void;
};

const Pagination = ({
	pageNumbers,
	currentPage,
	handlePageChange,
}: PaginationProps) => {
	return (
		<div className="flex justify-center my-10">
			{pageNumbers.map((pageNumber, index) => (
				<button
					key={pageNumber}
					onClick={() => handlePageChange(pageNumber)}
					className={`${
						currentPage === pageNumber ? "bg-blue-400" : "bg-violet-200"
					} cursor-pointer border rounded-md mx-1 w-10 h-10`}
				>
					{pageNumber}
				</button>
			))}
		</div>
	);
};

export default Pagination;
