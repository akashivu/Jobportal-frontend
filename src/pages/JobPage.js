import JobList from '../component/JobList';


const JobPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
      <JobList />
    </div>
  );
};

export default JobPage;
