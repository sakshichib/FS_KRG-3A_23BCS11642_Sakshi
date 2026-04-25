package com.example;

import jakarta.persistence.*;

public class JPADemo {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("jpa-demo");
        EntityManager em = emf.createEntityManager();
        EntityTransaction tx = em.getTransaction();

        try {
            tx.begin();

            Department dept = new Department("Engineering");
            Employee emp1 = new Employee("Alice");
            Employee emp2 = new Employee("Bob");

            dept.addEmployee(emp1);
            dept.addEmployee(emp2);

            em.persist(dept);

            tx.commit();

            System.out.println("Persisted: " + dept);
            for (Employee e : dept.getEmployees()) {
                System.out.println("  -> " + e);
            }

            // Verify row counts
            em.clear();
            tx.begin();
            long deptCount = ((Number) em.createQuery("SELECT COUNT(d) FROM Department d").getSingleResult()).longValue();
            long empCount = ((Number) em.createQuery("SELECT COUNT(e) FROM Employee e").getSingleResult()).longValue();
            tx.commit();

            System.out.println("\nVerification:");
            System.out.println("Departments in DB: " + deptCount);
            System.out.println("Employees in DB: " + empCount);
            System.out.println("Total rows persisted: " + (deptCount + empCount));

        } catch (Exception e) {
            if (tx.isActive()) tx.rollback();
            e.printStackTrace();
        } finally {
            em.close();
            emf.close();
        }
    }
}

