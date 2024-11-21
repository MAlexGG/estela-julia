function SortedToursDate(array) {
    const sortedTours = array.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
    return sortedTours;
}

export default SortedToursDate