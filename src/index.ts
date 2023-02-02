const { UVicCourseScraper } = require("@vikelabs/uvic-course-scraper");

async function main() {
  const allCourses: KualiCourseCatalog[] =
    await UVicCourseScraper.getAllCourses();
  const courseTitle: string = allCourses[0].title;

  // get course details for course with pid 'ByS23Pp7E' (in this case thats ACAN 225)
  //   const courseDetails: KualiCourseItem =
  //     await UVicCourseScraper.getCourseDetails("ByS23Pp7E");
  //   const courseDescription: string = courseDetails[0].description;
  //   const courseLectureHours: string = courseDetails[0].hoursCatalogText.lecture;

  //   // get course sections for CSC 111 in spring 2021
  //   const courseSections: ClassScheduleListing[] =
  //     await UVicCourseScraper.getCourseSections("202101", "CSC", "111");
  //   const courseSectionCode: string = courseSections[0].sectionCode;

  //   // get seats for course section with CRN 10953 in spring 2021 (in this case thats ECE 260 - A01)
  //   const sectionSeats: DetailedClassInformation =
  //     await UVicCourseScraper.getSectionSeats("202101", "10953");
  //   const sectionTotalSeats: number = sectionSeats.seats.capacity;
}

main();

export {};
