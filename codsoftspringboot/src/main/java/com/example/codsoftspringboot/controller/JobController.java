package com.example.codsoftspringboot.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.codsoftspringboot.model.job;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173") // connection between react and springboot

public class JobController {
        private final List<job> jobs = Arrays.asList(
                        new job(1L, "Software Engineer", "Develop and maintain web applications.", "Coimbatore, TN",
                                        "$120,000",
                                        "2287296527", "Microsoft", "microsoft@gmail.com"),
                        new job(2L, "Product Manager", "Lead product development teams.", "Gingee, TN", "$130,000",
                                        "8753062781",
                                        "Google", "google@gmail.com"),
                        new job(3L, "Data Scientist",
                                        "Analyze large datasets, develop machine learning models, and provide insights to drive business decisions.",
                                        "Villupuram, TN", "$115,000", "8963781756", "LinkedIN", "linkedin@gmail.com"),
                        new job(4L, "UX Designer",
                                        "Design user interfaces, conduct user research, and create wireframes and prototypes to improve user experience.",
                                        "Chennai, TN", "$105,000", "8074825916", "Infosys", "infosys@gmail.com"),
                        new job(5L, "Marketing Specialist",
                                        "Develop and execute marketing campaigns, analyze market trends, and work with the sales team to increase brand awareness.",
                                        "Thiruvannamalai, TN", "$90,000", "9062847299", "TCS", "tcs@gmail.com"),
                        new job(6L, "HR Manager",
                                        "Oversee recruitment processes, manage employee relations, and implement HR policies and procedures.",
                                        "Bengalore, KA", "$110,000", "8269016738", "SBI", "sbi@gmail.com"),
                        new job(7L, "Sales Executive",
                                        "Identify new business opportunities, build client relationships, and achieve sales targets.",
                                        "Kolkata, WB", "$100,000 + Commission", "8067387765", "Apple",
                                        "apple@gmail.com"),
                        new job(8L, "IT Support Specialist",
                                        "Provide technical support to end-users, troubleshoot hardware and software issues, and maintain IT systems.",
                                        "Madurai, TN", "$75,000", "9926878767", "NVIDIA", "nvidia@gmail.com"),
                        new job(9L, "Accountant",
                                        "Manage financial records, prepare tax returns, and ensure compliance with financial regulations.",
                                        "Hyderabad, TS", "$85,000", "918736589", "Amazon", "amazon@gmail.com"),
                        new job(10L, "Operations Manager",
                                        "Oversee daily operations, manage operational budgets, and improve processes to enhance efficiency.",
                                        "Visakhapatnam, ", "$125,000", "9998887779", "Meta", "meta@gmail.com"));

        @GetMapping("/jobs")
        public List<job> getJobs() {
                return jobs;
        }

        @GetMapping("/jobs/{id}")
        public job getJobById(@PathVariable Long id) {
                return jobs.stream()
                                .filter(job -> job.getId().equals(id))
                                .findFirst()
                                .orElse(null);
        }

        @PostMapping("/apply")
        public String applyForJob(@RequestParam("resume") MultipartFile resume, @RequestParam("jobId") Long jobId) {
                if (resume.isEmpty() || jobId == null) {
                        return "Failed to upload resume. Please provide all required fields.";
                }

                String resumePath = "uploads/" + resume.getOriginalFilename();
                try {
                        Files.createDirectories(Paths.get("uploads"));
                        resume.transferTo(new File(resumePath));
                } catch (IOException e) {
                        e.printStackTrace();
                        return "Failed to upload resume.";
                }

                return "Resume uploaded successfully!";
        }

        // @GetMapping("/files")
        // public List<String> listUploadedFiles() {
        // File uploadDir = new File("uploads");
        // return Arrays.stream(uploadDir.listFiles())
        // .map(File::getName)
        // .collect(Collectors.toList());
        // }
        @GetMapping("/search")
        public List<job> searchJobs(@RequestParam String query) {
                return jobs.stream()
                                .filter(job -> job.getTitle().toLowerCase().contains(query.toLowerCase()) ||
                                                job.getCompany().toLowerCase().contains(query.toLowerCase()) ||
                                                job.getLocation().toLowerCase().contains(query.toLowerCase()) ||
                                                job.getSalary().toLowerCase().contains(query.toLowerCase()))
                                .collect(Collectors.toList());
        }

}